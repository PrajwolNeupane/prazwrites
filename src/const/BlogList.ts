const BlogList: {
  slug: string;
  title: string;
  short_description: string;
  description: string[];
  date: string;
  image: string;
  category: string;
}[] = [
  {
    image:
      "https://firebase.google.com/static/images/brand-guidelines/logo-built_black.png",
    slug: "what-is-firebase",
    title: "What is Firebase",
    date: "Nov 22",
    category: "Backend",
    short_description:
      "Firebase is a comprehensive development platform provided by Google. It offers a wide range of tools and services that help developers...",
    description: [
      "<h2>Firebase</h2> is a comprehensive development platform provided by Google. It offers a wide range of tools and services that help developers build and manage web and mobile applications more efficiently. Firebase provides features for authentication, real-time database, cloud storage, hosting, messaging, analytics, machine learning, and more. It allows developers to focus on building their applications without worrying about infrastructure management.",
      "Some key features of Firebase include:",
      "<h3>1. Real-time Database:</h3> A NoSQL database that allows you to synchronize data in real time across multiple clients.",
      "<h3>2. Authentication:</h3> Provides built-in authentication services, including email/password authentication, social logins (e.g., Google, Facebook, Twitter), and more",
      "<h3>3. Cloud Firestore:</h3> A flexible and scalable NoSQL document database for storing and syncing data.",
      "<h3>4. Cloud Storage:</h3> Offers secure and scalable cloud storage for storing and serving user-generated content like images, videos, and files.",
      "<h3>5. Hosting:</h3> Allows you to deploy and host your web applications easily with a global CDN (Content Delivery Network).",
      "<h3>6. Cloud Functions:</h3> Lets you run server-side code in a serverless environment, responding to events and triggers.",
      "<h3>7. Cloud Messaging:</h3> Provides reliable and efficient messaging services for sending notifications and messages to users across devices.",
      "<h3>8. Analytics:</h3> Helps you gain insights into user behavior and app usage with powerful analytics tools.",
      "<h3>9. Machine Learning:</h3> Offers pre-built machine learning models and APIs for adding intelligent features to your applications.",
      "Firebase is widely used by developers due to its ease of use, scalability, and the extensive set of features it provides. It simplifies the development process and allows developers to focus more on building great user experiences.",
    ],
  },
  {
    image:
      "https://assets-global.website-files.com/60658b47b03f0c77e8c14884/6256965282e9d1a5a5df6841_Password%20Hashing.png",
    slug: "what-is-salt-in-hashing",
    title: "What is salt in hashing ? ",
    date: "Nov 26",
    category: "Backend",
    short_description:
      "In the context of hashing, a salt is a random value added to the input data before hashing it. It is ...",
    description: [
      "In the context of hashing, a salt is a random value added to the input data before hashing it. It is used as an additional security measure to protect against various types of attacks, such as rainbow table attacks and dictionary attacks.",
      "The purpose of using a salt in hashing is to add uniqueness and complexity to the hash output, even for the same input. By appending a salt to the input data, the resulting hash becomes different even if the original data is the same. This prevents attackers from precomputing hashes for common inputs or using lookup tables (rainbow tables) to reverse-engineer the original input from the hash.",
      "Salting is commonly used in password hashing. When a user creates an account and sets a password, the password is combined with a randomly generated salt value. The salted password is then hashed and stored in the database. When the user attempts to log in, the entered password is combined with the stored salt, hashed, and compared to the stored hash. If the hashes match, the password is considered valid.",
      "Using salts in hashing adds an extra layer of security and makes it more difficult for attackers to crack hashed values, particularly in scenarios where a large number of passwords need to be protected.",
    ],
  },
  {
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20230911173805/What-is-Artiificial-Intelligence(AI).webp",
    slug: "best-tool-or-frameworks-to-start-artificial-intelligence",
    title: "Best tool  or frameworks to start Artificial Intelligence",
    date: "Nov 29",
    category: "Aritifical Intelligence",
    short_description:
      "There are several popular tools and frameworks available for getting started with Artificial Intelligence (AI). Here are some...",
    description: [
      "There are several <h2>popular tools and frameworks available for getting started with Artificial Intelligence (AI)</h2>. Here are some of the widely used ones:",
      "<h3>1. TensorFlow:</h3> Developed by Google, TensorFlow is one of the most popular open-source frameworks for AI and machine learning. It provides a comprehensive ecosystem for building and deploying machine learning models, including support for deep learning.",
      "<h3>2. PyTorch:</h3> PyTorch is another popular open-source deep learning framework widely used in academia and industry. It offers dynamic computational graphs, making it flexible and easy to use for researchers and developers.",
      "<h3>3. scikit-learn:</h3> scikit-learn is a versatile machine learning library in Python. It provides a wide range of algorithms and tools for tasks such as classification, regression, clustering, and dimensionality reduction.",
      "<h3>4. Keras:</h3> Keras is a user-friendly deep learning library that runs on top of TensorFlow or other backend engines. It offers a high-level API for building and training neural networks, making it accessible to beginners and experienced practitioners alike.",
      "<h3>5. OpenAI Gym:</h3> OpenAI Gym is a toolkit for developing and comparing reinforcement learning algorithms. It provides a wide range of environments and benchmarks to help researchers and developers in the field of reinforcement learning.",
      "<h3>6. Microsoft Cognitive Toolkit (CNTK):</h3> CNTK is a deep learning toolkit developed by Microsoft. It offers efficient training and inference for deep neural networks and supports distributed training across multiple GPUs and machines.",
      "<h3>7. Apache MXNet:</h3> MXNet is a flexible and efficient deep learning framework with support for multiple programming languages. It provides a scalable and portable solution for training and deploying deep learning models.",
      "These are just a few examples, and there are many other tools and frameworks available depending on your specific requirements and preferences. It's important to consider factors such as documentation, community support, ease of use, and compatibility with your chosen programming language when selecting a tool or framework for AI development.",
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfZNPWEyE9T5LyCFmyC4xvFm87iwX0--YRA&usqp=CAU",
    slug: "usestate-and-useeffect-hooks-in-react",
    title: "What is useState and useEffect Hooks in React",
    date: "Dec 16",
    category: "Web Frontend",
    short_description:
      "useState and useEffect are two commonly used hooks in React that are part of the Hooks API introduced in React 16.8. They enable functional components to manage state and side effects, which were traditionally features associated with class components...",
    description: [
      "<h2>useState Hook:</h2>",
      "The useState hook is used for adding state to functional components. It returns an array with two elements:",
      "The current state value.",
      "A function that allows you to update the state.",
      "Here's a basic example:",
      `<code>import React, { useState } from 'react';

      function ExampleComponent() {
        const [count, setCount] = useState(0);
      
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      </code>`,
      "In this example, count is the state variable, and setCount is the function used to update it.",
      "<h2>useEffect Hook:</h2>",
      "The useEffect hook is used for managing side effects in functional components. It allows you to perform actions (side effects) in response to component lifecycle events, such as mounting, updating, or unmounting.",
      `<code>import React, { useState, useEffect } from 'react';

      function ExampleComponent() {
        const [data, setData] = useState(null);
      
        useEffect(() => {
          // This code will run after the component renders
      
          // Example: Fetch data from an API
          fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
      
          // Cleanup function (optional)
          return () => {
            // This code will run when the component is unmounted or updated
            // Cleanup logic (e.g., clear intervals, cancel subscriptions)
        }, []); // Empty dependency array means this effect runs once after the initial render

    return (
      <div>
        {data ? (
          <p>Data: {data}</p>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }
</code>`,
      "In this example, useEffect is used to fetch data from an API after the initial render. The empty dependency array ([]) ensures that the effect runs only once after the initial render. You can include dependencies in the array to make the effect run whenever those dependencies change.",
      "The cleanup function is optional and is used for cleaning up resources or canceling subscriptions when the component is unmounted or updated.",
      "These hooks make it easier to manage state and side effects in functional components, allowing developers to write more concise and readable code.",
    ],
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*f8bZ4XJGd60GW6qW5kLcUQ.jpeg",
    slug: "the-no-homework-policy",
    title: "The No Homework Policy. The No Homework Policy",
    date: "Dec 4",
    category: "Mobile Frontend",
    short_description:
      "An early experience in making my own rules came when I entered high school. An early experience in making my own rules...",
    description: [
      "An early experience in making my own rules came when I entered high school. In the first weeks of my freshman year, I tried to do everything right. I did what I was told to do — and this included my homework. After lacrosse practice and my after-school job at a local supermarket, I got home around 8:00p.m. Then I had to eat some dinner, do homework, and go to sleep so I could wake up and do it all over again.",
      "For the first weeks, I forged ahead with this plan. There was a certain amount of reading for history class, problems to be solved for math, and similar nightly assignments from English, political science, chemistry, biology, and more. The workload added up, and wasn’t particularly fast at reading or math. But that first week, I was determined to get it all done.",
      "I quickly discovered that trying to complete all the homework assigned to me meant staying up almost all night, every night. I couldn’t quit lacrosse — I’d founded the team and was its captain. And I needed my job in order to contribute to the family income.",
      "So I decided the homework needed to go. My plan was simple. I would work as hard as possible to pay attention and be completely focused in each class, but I would not bring my books home, and I would not do any of the homework assigned to me. If the homework was intended to reinforce what was taught in class, I would be fine because I would make sure to absorb it all during the school day. Once I landed on this solution, a sense of relief washed over me. All that was left was the small matter of communicating my “No Homework Policy” to my teachers.",
    ],
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*f8bZ4XJGd60GW6qW5kLcUQ.jpeg",
    slug: "the-no-homework-policy",
    title: "The No Homework Policy. The No Homework Policy",
    date: "Dec 4",
    category: "Mobile Frontend",
    short_description:
      "An early experience in making my own rules came when I entered high school. An early experience in making my own rules...",
    description: [
      "An early experience in making my own rules came when I entered high school. In the first weeks of my freshman year, I tried to do everything right. I did what I was told to do — and this included my homework. After lacrosse practice and my after-school job at a local supermarket, I got home around 8:00p.m. Then I had to eat some dinner, do homework, and go to sleep so I could wake up and do it all over again.",
      "For the first weeks, I forged ahead with this plan. There was a certain amount of reading for history class, problems to be solved for math, and similar nightly assignments from English, political science, chemistry, biology, and more. The workload added up, and wasn’t particularly fast at reading or math. But that first week, I was determined to get it all done.",
      "I quickly discovered that trying to complete all the homework assigned to me meant staying up almost all night, every night. I couldn’t quit lacrosse — I’d founded the team and was its captain. And I needed my job in order to contribute to the family income.",
      "So I decided the homework needed to go. My plan was simple. I would work as hard as possible to pay attention and be completely focused in each class, but I would not bring my books home, and I would not do any of the homework assigned to me. If the homework was intended to reinforce what was taught in class, I would be fine because I would make sure to absorb it all during the school day. Once I landed on this solution, a sense of relief washed over me. All that was left was the small matter of communicating my “No Homework Policy” to my teachers.",
    ],
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*f8bZ4XJGd60GW6qW5kLcUQ.jpeg",
    slug: "the-no-homework-policy",
    title: "The No Homework Policy. The No Homework Policy",
    date: "Dec 4",
    category: "Mobile Frontend",
    short_description:
      "An early experience in making my own rules came when I entered high school. An early experience in making my own rules...",
    description: [
      "An early experience in making my own rules came when I entered high school. In the first weeks of my freshman year, I tried to do everything right. I did what I was told to do — and this included my homework. After lacrosse practice and my after-school job at a local supermarket, I got home around 8:00p.m. Then I had to eat some dinner, do homework, and go to sleep so I could wake up and do it all over again.",
      "For the first weeks, I forged ahead with this plan. There was a certain amount of reading for history class, problems to be solved for math, and similar nightly assignments from English, political science, chemistry, biology, and more. The workload added up, and wasn’t particularly fast at reading or math. But that first week, I was determined to get it all done.",
      "I quickly discovered that trying to complete all the homework assigned to me meant staying up almost all night, every night. I couldn’t quit lacrosse — I’d founded the team and was its captain. And I needed my job in order to contribute to the family income.",
      "So I decided the homework needed to go. My plan was simple. I would work as hard as possible to pay attention and be completely focused in each class, but I would not bring my books home, and I would not do any of the homework assigned to me. If the homework was intended to reinforce what was taught in class, I would be fine because I would make sure to absorb it all during the school day. Once I landed on this solution, a sense of relief washed over me. All that was left was the small matter of communicating my “No Homework Policy” to my teachers.",
    ],
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*f8bZ4XJGd60GW6qW5kLcUQ.jpeg",
    slug: "the-no-homework-policy",
    title: "The No Homework Policy. The No Homework Policy",
    date: "Dec 4",
    category: "Mobile Frontend",
    short_description:
      "An early experience in making my own rules came when I entered high school. An early experience in making my own rules...",
    description: [
      "An early experience in making my own rules came when I entered high school. In the first weeks of my freshman year, I tried to do everything right. I did what I was told to do — and this included my homework. After lacrosse practice and my after-school job at a local supermarket, I got home around 8:00p.m. Then I had to eat some dinner, do homework, and go to sleep so I could wake up and do it all over again.",
      "For the first weeks, I forged ahead with this plan. There was a certain amount of reading for history class, problems to be solved for math, and similar nightly assignments from English, political science, chemistry, biology, and more. The workload added up, and wasn’t particularly fast at reading or math. But that first week, I was determined to get it all done.",
      "I quickly discovered that trying to complete all the homework assigned to me meant staying up almost all night, every night. I couldn’t quit lacrosse — I’d founded the team and was its captain. And I needed my job in order to contribute to the family income.",
      "So I decided the homework needed to go. My plan was simple. I would work as hard as possible to pay attention and be completely focused in each class, but I would not bring my books home, and I would not do any of the homework assigned to me. If the homework was intended to reinforce what was taught in class, I would be fine because I would make sure to absorb it all during the school day. Once I landed on this solution, a sense of relief washed over me. All that was left was the small matter of communicating my “No Homework Policy” to my teachers.",
    ],
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*f8bZ4XJGd60GW6qW5kLcUQ.jpeg",
    slug: "the-no-homework-policy",
    title: "The No Homework Policy. The No Homework Policy",
    date: "Dec 4",
    category: "Mobile Frontend",
    short_description:
      "An early experience in making my own rules came when I entered high school. An early experience in making my own rules...",
    description: [
      "An early experience in making my own rules came when I entered high school. In the first weeks of my freshman year, I tried to do everything right. I did what I was told to do — and this included my homework. After lacrosse practice and my after-school job at a local supermarket, I got home around 8:00p.m. Then I had to eat some dinner, do homework, and go to sleep so I could wake up and do it all over again.",
      "For the first weeks, I forged ahead with this plan. There was a certain amount of reading for history class, problems to be solved for math, and similar nightly assignments from English, political science, chemistry, biology, and more. The workload added up, and wasn’t particularly fast at reading or math. But that first week, I was determined to get it all done.",
      "I quickly discovered that trying to complete all the homework assigned to me meant staying up almost all night, every night. I couldn’t quit lacrosse — I’d founded the team and was its captain. And I needed my job in order to contribute to the family income.",
      "So I decided the homework needed to go. My plan was simple. I would work as hard as possible to pay attention and be completely focused in each class, but I would not bring my books home, and I would not do any of the homework assigned to me. If the homework was intended to reinforce what was taught in class, I would be fine because I would make sure to absorb it all during the school day. Once I landed on this solution, a sense of relief washed over me. All that was left was the small matter of communicating my “No Homework Policy” to my teachers.",
    ],
  },
];

export default BlogList;
