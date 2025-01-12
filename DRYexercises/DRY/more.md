# DRY Principles and Refactoring Examples

## **Key Principles of DRY (Don't Repeat Yourself)**

1. **Identify Patterns of Repetition**:
   - Look for repeated structures or logic in your code.
   - Example: Duplicate API calls, repeated DOM manipulations, or repeated array transformations.

2. **Abstract Common Logic**:
   - Extract common functionality into reusable helper functions, classes, or configuration objects.

3. **Use Parameters**:
   - Dynamically handle variations by passing arguments or configuration objects to functions.

4. **Refactor Iteratively**:
   - Avoid premature abstraction. Only refactor when repetition occurs **three or more times**.

5. **Centralize Data**:
   - Store shared configurations, constants, or mappings in a single location for easy maintenance.

---

## **Refactoring Examples**

### **1. Consolidating Fetch Calls**

#### **Initial Code**
```javascript
const weatherData = {
    temperature: 'hot',
    humidity: 'moderate',
    windSpeed: 'breezy',
};

fetch(`https://api.weather.com/data?value=${weatherData.temperature}`)
    .then((res) => res.json())
    .then((data) => console.log(data));

fetch(`https://api.weather.com/data?value=${weatherData.humidity}`)
    .then((res) => res.json())
    .then((data) => console.log(data));

fetch(`https://api.weather.com/data?value=${weatherData.windSpeed}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
```

#### **Refactored Code**
```javascript
const fetchWeatherData = async (dataObject, apiKey) => {
    const entries = Object.entries(dataObject);
    const fetchPromises = entries.map(([key, value]) =>
        fetch(`https://api.weather.com/data?value=${value}&apiKey=${apiKey}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch ${key}`);
                }
                return res.json();
            })
            .then((data) => ({ key, data }))
            .catch((error) => ({ key, error: error.message }))
    );

    const results = await Promise.all(fetchPromises);
    results.forEach(({ key, data, error }) => {
        if (error) {
            console.error(`Error fetching ${key}: ${error}`);
        } else {
            console.log(`${key} data:`, data);
        }
    });
};

const weatherData = {
    temperature: 'hot',
    humidity: 'moderate',
    windSpeed: 'breezy',
};
fetchWeatherData(weatherData, 'YOUR_API_KEY');
```

---

### **2. Generating Dynamic Object Arrays**

#### **Initial Code**
```javascript
const quizData = {
    sources: [
        { questionCategory: 'shape', imageName: 'Triangle', source: '/path/Triangle.svg' },
        { questionCategory: 'shape', imageName: 'Circle', source: '/path/Circle.svg' },
        { questionCategory: 'shape', imageName: 'Square', source: '/path/Square.svg' },
    ],
};
```

#### **Refactored Code**
```javascript
const generateSources = (categories, filePath) => {
    return categories.flatMap(({ category, items }) =>
        items.map((item) => ({
            questionCategory: category,
            imageName: item,
            source: `${filePath}/${item}.svg`,
        }))
    );
};

const categories = [
    { category: 'shape', items: ['Triangle', 'Circle', 'Square'] },
];
const filePath = '/path';
const sources = generateSources(categories, filePath);

console.log(sources);
```

---

### **3. Refactoring `displayRandomQuestion` Function**

#### **Initial Code**
```javascript
const displayRandomQuestion = (arr) => {
    const randomQuestion = getRandomizedItem(arr);
    if (randomQuestion === quizData.questions[0]) {
        // Logic for question 1
    } else if (randomQuestion === quizData.questions[1]) {
        // Logic for question 2
    }
};
```

#### **Refactored Code**
```javascript
const handleQuestionDisplay = (questionData) => {
    const { questionType, answers, sourceFilters, correctAnswer, imageHandler } = questionData;

    const correctSource = getCorrectSource(quizData.sources, sourceFilters);
    displayImage(correctSource.source);
    displayAnswers(answers, correctAnswer, () => loadNextQuestion());
};

const displayRandomQuestion = (arr) => {
    const randomQuestion = getRandomizedItem(arr);
    const questionConfigs = {
        'What shape is this?': {
            questionType: 'shape',
            answers: quizData.answers.shapes,
            sourceFilters: { questionCategory: 'shape' },
            correctAnswer: getRandomizedItem(quizData.answers.shapes),
            imageHandler: (source) => displayImage(source),
        },
    };

    const config = questionConfigs[randomQuestion];
    if (config) {
        handleQuestionDisplay(config);
    }
};
```

---

## **Tips for Refactoring**

1. **Abstract Logic**:
   - Use helper functions or configuration objects to consolidate repetitive code.

2. **Centralize Data**:
   - Store reusable mappings, constants, or configurations in one place (e.g., a `config` object).

3. **Leverage Dynamic Patterns**:
   - Use loops, `map`, or `flatMap` to dynamically generate repetitive structures.

4. **Iterate Gradually**:
   - Refactor incrementally, testing each step to ensure no functionality breaks.

---

## **Testing Refactored Code**
Use testing frameworks like **Vitest** to validate the refactored functions. Example:

```javascript
import { describe, it, expect } from 'vitest';

describe('fetchWeatherData', () => {
    it('should fetch data for all keys', async () => {
        global.fetch = vi.fn((url) =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ details: url }),
            })
        );

        const weatherData = {
            temperature: 'hot',
            humidity: 'moderate',
        };

        const results = await fetchWeatherData(weatherData, 'YOUR_API_KEY');
        expect(results).toBeDefined();
        fetch.mockRestore();
    });
});
