# Overview of Crochet Management System

## Scope of the System

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. Users will be able to:

- Organize and search for yarns based on attributes (weight, fiber content, etc.).
- Track crochet projects, including costs based on yarn usage.
- Store digital crochet patterns, add annotations, and print them.
- Use financial calculators to compare yarn prices and calculate project costs.

### Out of scope

E-commerce integrations for yarn purchasing and mobile app development in the initial phase.

### Key Features

- **Yarn Management**: Add, edit, and categorize yarns by various attributes (e.g., weight, fiber, price).
- **Project Management**: Track progress and costs based on yarn usage.
- **Pattern Management**: Store and manage digital crochet patterns.
- **Financial Calculators**: Calculate yarn cost per 100 meter, and project total cost based on yarn usage.
- **Offline Support**: View and edit inventory, projects, and patterns while offline. Data sync when back online.

## Assumptions

- **Primary Users**: Crochet enthusiasts.
- **User Input**: Users manually input yarn, project, pattern, and cost details.
- **Access**: Primarily via desktop browsers.
- **Offline Functionality**: Basic functionalities will work offline, with data syncing upon reconnection.

## Constraints

- **Technology Agnostic**: No preference for specific technologies initially.
- **Device Usage**: Primarily desktop; mobile not prioritized.
- **Offline Support**: Basic offline functionality required, with auto-sync upon reconnection.
- **Performance**: The system should perform well for small-scale users but allow for growth. No immediate need for large-scale optimizations.
- **Data Security**: Users will store personal project data. Sensitive data like payment info is not included, but basic encryption and security best practices must be followed.
- **Financial Compliance**: There's no need to comply with financial regulations since the system is for personal use.
- **Scalability**: The architecture should accommodate easy scaling for future growth (e.g., mobile apps, e-commerce integration).
- **Usability**: The system should be intuitive for non-technical users with a focus on easy data entry and manipulation.

# System Requirements

## Functional Requirements

### Yarn Management

- **Must Have**
  - Users can add, edit, and delete yarns with attributes (weight, fiber, price in a chosen currency, etc.).
  - Yarns are categorized by attributes (weight, fiber content, price, etc.).
  - Users can search and filter yarns by attributes.

### Project Management

- **Must Have**
  - Users can create, edit, and delete crochet projects.
  - Project costs are calculated automatically based on yarn usage and associated prices.
- **Could Have**
  - Users can track progress of each project through predefined stages (e.g., "In Progress," "Completed").

### Pattern Management

- **Must Have**
  - Users can upload and organize crochet patterns.
  - Patterns can be stored as text, image, and other common formats (e.g., PDF, PNG).
- **Could Have**
  - Users can annotate patterns and print them.

### Financial Calculators

- **Must Have**
  - Users can compare the total cost of different yarns for a project based on price and amount.
- **Should Have**
  - A calculator should help users determine price per 100 meters based on skein length and price.
- **Could Have**
  - Users can export financial calculations as a PDF or CSV file.

### Offline Support

- **Must Have**
  - Basic offline functionality should allow viewing and editing of yarn, project, and pattern data.
  - Offline changes automatically sync when user reconnects.
- **Should Have**
  - Basic search and filtering should work offline.

### Data Syncing

- **Must Have**
  - When online, the system automatically syncs any changes made offline.
  - Users can resolve conflicts through a side-by-side comparison of local changes and server data.

## Non-Functional Requirements

### Usability

The system should have an intuitive, user-friendly interface with a focus on simplicity for data entry and data manipulation.

### Performance

- The system should efficiently handle large data sets (e.g., hundreds of yarns or projects) without significant performance loss.
- Sync operations should happen smoothly, with minimal delay when switching between online and offline modes.

### Availability

- The system should be available 99.9% of the time during online use, excluding maintenance windows.
- Core features should always be available offline.

### Security

- The system must use encryption for data transmission and stored user data.
- Authentication is required for accessing personal inventories and projects.

### Scalability

- The system architecture must allow easy scalability in the future (e.g., more users, e-commerce integrations, mobile app).

### Data Storage and Backup

- User data should be backed up regularly to prevent loss.
- Offline data should be stored locally and must be recoverable in case of issues during syncing.

# Use Cases

## Use Case 1: Manage Yarn Inventory

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
    - The user has yarn inventory available or is adding new yarns.
- **Main Flow**:
    1. The user accesses the yarn inventory page.
    2. The user can add a new yarn by inputting details such as name, weight, fiber content, and price.
    3. The user can edit or delete existing yarns.
    4. The user can search or filter the inventory by yarn attributes (e.g., fiber content, weight).
- **Post-conditions**:
    - Updated yarn inventory reflects changes made by the user.

## Use Case 2: Manage Crochet Projects

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
    - The user has yarns available in their inventory.
- **Main Flow**:
    1. The user navigates to the crochet projects section.
    2. The user creates a new project by entering a project name and selecting the yarn(s) to be used.
    3. The system automatically calculates the project cost based on the yarn selected and its associated price.
    4. The user can update the project progress by entering a percentage or selecting a predefined stage (e.g., “In Progress”).
    5. The user can edit or delete the project at any time.
- **Post-conditions**: Project data is saved, and yarn usage costs are automatically updated.

## Use Case 3: Upload and Organize Crochet Patterns

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
- **Main Flow**:
    1. The user navigates to the pattern storage section.
    2. The user uploads a pattern file (PDF, JPEG, PNG, etc.).
    3. The user can add notes or annotations to the pattern.
    4. The user can organize patterns into folders or categories.
    5. The user can print patterns, with the option to include or exclude annotations.
- **Post-conditions**: Pattern is uploaded and stored with optional annotations.

## Use Case 4: Financial Calculators for Yarn and Project Costs

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system.
    - The user has yarns in their inventory and projects defined.
- **Main Flow**:
    1. The user accesses the financial calculator from a project page.
    2. The user selects yarns and enters the required yarn quantity for the project.
    3. The system calculates and displays the total project cost.
    4. The user can calculate the price per 100 meters of yarn by entering the skein length and price.
    5. The user can save or export the calculation results as a PDF or CSV file.
- **Post-conditions**: Financial data is calculated, with an option to save/export.

## Use Case 5: Offline Mode

- **Actors**: User
- **Pre-conditions**:
    - The user is logged into the system and working in offline mode with previously synced data available.
- **Main Flow**:
    1. The user adds, edits, or deletes yarns, projects, or patterns while offline.
    2. The system saves these changes locally.
    3. The system alerts the user that full functionality (e.g., search and filter) may not be available offline.
- **Post-conditions**: Offline changes are saved locally and ready for syncing when connectivity is restored.

## Use Case 6: Sync Data after Reconnecting Online

- **Actors**: User
- **Pre-conditions**:
    - The user has made changes while in offline mode.
    - The user has reconnected to the internet.
- **Main Flow**:
    1. The system detects the restored connection and automatically begins syncing offline changes to the server.
    2. If sync conflicts are detected, the system notifies the user and presents a conflict resolution dialog.
    3. The user selects whether to keep their offline changes or revert to server data.
    4. The system completes the sync and provides a summary of synced changes.
- **Post-conditions**: All offline changes are synced with the server, and any conflicts are resolved.

# Scalability Considerations

The system is designed to support future growth while maintaining high performance for both read-heavy and write-heavy operations. Initially, the architecture will handle a small to moderate number of users, but it must scale effectively as the user base and data volume grow. Below are the strategies for scaling various system components using AWS infrastructure to handle the increasing read and write loads.

## Horizontal and Vertical Scaling

- **Vertical Scaling**: In the initial stages, the system will use Amazon EC2 instances for the web application and API layers. To handle early load increases, vertical scaling (adding CPU and memory to the instances) will be implemented. This approach works well for early growth and simplifies setup.
- **Horizontal Scaling**: As the user base grows, horizontal scaling will be achieved through AWS Auto Scaling. This will automatically add or remove EC2 instances based on CPU, memory, or traffic metrics. Horizontal scaling will ensure that the system can distribute both read and write operations efficiently across multiple instances.

## Database Scalability

The system's database (PostgreSQL) will need to support both read-heavy and write-heavy workloads, especially as users frequently update project details and retrieve large datasets like yarn or pattern information.

- **Initial Setup**: Amazon RDS for PostgreSQL will be used as the database backend. In the early stages, the database will run on a single node with optimizations for both reads and writes, including proper indexing on searchable fields (yarn attributes, project status, etc.) and query optimization for cost-related calculations.
- **Future Scalability**:
    - **Read Replicas**: To handle increasing read-heavy operations (e.g., users frequently searching and filtering yarns or viewing project details), read replicas will be deployed. RDS Read Replicas will offload read operations from the primary database, improving performance for users fetching data.
    - **Write-Optimized Instances**: For write-heavy workloads (e.g., adding new yarns, updating projects, and syncing offline changes), the database will be optimized for faster write operations by using scalable storage options that support high I/O throughput. The system will prioritize configurations that allow for rapid data writes, such as increasing instance sizes, using storage types optimized for frequent read/write operations, and adjusting I/O capacity to meet growing demands.
    - **Sharding**: If the database reaches a point where vertical scaling is insufficient, sharding will be introduced. Data can be partitioned, for example, by user ID or project category to distribute both read and write loads across multiple database nodes.
    - **Caching**: For frequently accessed, read-heavy data like yarn attributes and pattern files, a distributed cache using Amazon ElastiCache (Redis) will be introduced. This will store commonly requested data in memory to reduce database load and improve response times.

## Web Application Scalability

The Web Application serves as the user interface, allowing users to manage yarn inventory, projects, and patterns. As the number of users increases, the Web Application must be able to handle more concurrent connections and traffic, ensuring responsiveness and availability.

- **Initial Setup**:
    - **Horizontal Scaling**: The Web Application will be deployed on AWS EC2 instances behind an Elastic Load Balancer (ELB). As the user base grows, additional EC2 instances can be automatically added or removed based on traffic patterns using AWS Auto Scaling. This ensures that the application can handle increased traffic without sacrificing performance.
- **Future Scalability**:
    - **CDN for Static Assets**: Static assets (e.g., HTML, CSS, JavaScript) will be distributed using a Content Delivery Network (CDN) like AWS CloudFront. This ensures faster delivery of assets by caching them closer to users, reducing latency and improving load times, especially for geographically dispersed users.
    - **Serverless Options**: For further scaling and reducing maintenance overhead, parts of the web application could be migrated to serverless platforms like AWS Amplify or AWS Lambda. This would allow the system to scale automatically without needing to manage underlying server infrastructure, particularly for handling spikes in user activity.

## API Layer Scalability

The API layer, built with Node.js and Express, must handle both read-heavy and write-heavy traffic as users interact with the system, especially when fetching patterns, updating projects, and performing financial calculations.

- **Initial Setup**: The API will run on Amazon EC2 instances, and Elastic Load Balancing (ELB) will be used to distribute incoming API requests across multiple instances, ensuring that both read and write operations are handled efficiently.
- **Future Scalability**:
    - **Load Balancing for Read/Write Separation**: In the future, separate load balancers and EC2 instance groups can be used to optimize for read-heavy and write-heavy traffic. API requests for fetching yarns and patterns (read-heavy) can be routed to instances optimized for reads, while updates to projects and patterns (write-heavy) can be directed to instances optimized for writes.
    - **Microservices for Scalability**: As the system evolves, the monolithic API can be refactored into microservices using AWS Lambda for serverless execution or containerized with Amazon ECS. Each service (e.g., yarn management, project management) can be scaled independently based on specific workload patterns (e.g., project management might be more write-heavy, while pattern viewing is more read-heavy).

## File Storage Scalability

The system stores unstructured data, like crochet pattern files, in AWS S3, which is well-suited for scaling file storage as user uploads grow. S3 can easily handle both read-heavy and write-heavy operations. With its virtually unlimited storage capacity, S3 can scale seamlessly with the system's growth.

## Monitoring and Auto-scaling

- **Monitoring**: Monitoring will be performed using Amazon CloudWatch, which will track key metrics (e.g., database read/write performance, API request times, cache hit/miss rates). Alerts will be set up to notify the team if performance bottlenecks arise, allowing for proactive scaling or adjustments.
- **Auto-scaling**: The system will use AWS Auto Scaling to dynamically adjust the number of EC2 instances based on real-time metrics such as CPU utilization, memory usage, and traffic patterns. This allows the system to scale automatically during periods of high read or write traffic, maintaining performance and availability.

# Performance and Optimizations

The system is designed to maintain high performance as it scales, ensuring efficient data retrieval, smooth user interactions, and fast syncing of data. Below are the key performance strategies and optimization.

## Database Optimization

### Indexing

Indexing will be applied to frequently queried fields such as yarn attributes (e.g., weight, fiber content) and project statuses. By creating indexes on these fields, the system can quickly locate relevant data without scanning the entire table, significantly speeding up search and filtering operations, especially as the dataset grows. Indexing is particularly crucial for ensuring that queries return results efficiently, even with large inventories or projects.

In addition to speeding up common queries, indexes will be carefully managed to balance read and write performance. While indexing enhances read operations, it can slightly slow down write operations (e.g., adding new yarn entries), so only the most frequently queried fields will be indexed to maintain overall performance.

### Query Optimization

Complex queries, such as calculating total yarn costs for projects, will be optimized to avoid performance bottlenecks like full table scans. Techniques like query caching will be implemented to store the results of frequently executed queries, reducing the need to recompute them.

## Caching for Faster Data Retrieval

### Server-Side Data Caching

Server-side caching is used to store frequently accessed data, such as yarn inventory and project details, in memory to improve retrieval speeds and reduce the load on the database. This is especially beneficial for read-heavy operations like searching yarns or viewing projects, as it significantly reduces latency and improves overall system performance.

### Client-Side Caching

Client-side caching is handled by service workers, which cache static resources such as HTML, CSS, and JavaScript in the user's browser. This enables faster page loads, as these assets are retrieved from the local cache rather than re-fetched from the server on every visit. Additionally, this supports offline functionality, allowing users to interact with cached data and static assets even when they are not connected to the internet.

## Efficient Data Syncing

To optimize the synchronization process when users reconnect after working offline, the system employs incremental syncing and batching sync operations, which work in tandem to reduce sync time and server load.

Incremental syncing identifies changes made offline and syncs only those differences with the server, minimizing data transfer and speeding up the sync process.

Batching then groups these changes into a smaller number of API requests, lowering latency and reducing the number of calls made to the server. For example, related changes like yarn updates or project modifications are combined into a single request, rather than sending each change separately.

Together, these techniques ensure that only necessary data is synced and that it is sent efficiently, providing a faster, smoother user experience.

# Security Considerations

Although the system doesn't handle sensitive financial or personal data, basic security measures are in place to protect user data and ensure the system operates reliably.

## Authentication and Authorization

- **JWT for Authentication**: The system will use JSON Web Tokens (JWT) to authenticate users. This ensures that only authorized users can access and modify their own data (e.g., yarn inventory, projects).

## Data Encryption

- **Encryption at Rest**: Although the data is not highly sensitive, all user data (e.g., yarn information, project details) stored in the database and file storage will be encrypted at rest using standard encryption methods. This ensures that even if unauthorized access to the storage occurs, the data remains protected.
- **Encryption in Transit**: All communication between the client and the server will be secured using TLS (Transport Layer Security), ensuring that data exchanged over the network is protected from eavesdropping or tampering.

## Input Validation

- **Server-Side Validation**: User input will be validated on both the client and server side to prevent common security vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS).

## Basic Rate Limiting

Rate limiting sets a cap on the number of API requests a client (user, device, or IP) can make over a specific period (e.g., 100 requests per minute). If a client exceeds this limit, further requests are either blocked or delayed until the rate limit resets.

To prevent abuse, the system will implement basic rate limiting on API endpoints, ensuring that no single user can overwhelm the system with excessive requests.

# High-Level Architecture

The architecture of the Crochet Management System is described using the [C4 model](https://c4model.com/). This model provides a clear and structured way to visualize the system at multiple levels:

1. **System Context**: Shows how the user interacts with the Crochet Management System through the Web Application.
2. **Container**: Breaks down the system into containers, including the Web Application, API Layer, Database, and File Storage.
3. **Component**: Provides a detailed look at the components within the API Layer, such as the Yarn API, Pattern API, Project API, and Calculator API, and how they interact with the Database and File Storage.

This layered approach to the architecture ensures that each component has a clear responsibility, promoting modularity, scalability, and maintainability.

## C4 Model Level 1: System Context View

The User interacts with the Crochet Management System through a Web Application running in the browser to manage yarns, patterns, and projects.

![Component - API layer](crochetMS/crochetMS_system_context.svg)

## C4 Model Level 2: Container View

The Container View breaks down the system into its major components and describes how they communicate. In this system, we have the following containers:

![Component - API layer](crochetMS/crochetMS_container_crochet_management_system.svg)

### Web Application (Browser)

The client-side application through which the user interacts with the system. It provides the interface for users to manage yarns, patterns, and projects. The Web Application uses Local Storage to cache unsynced changes (e.g., new yarns or project updates) when the user is offline.

### API Layer

The API layer serves as the intermediary between the web application and the backend services. The Web Application sends requests to the API Layer, which handles business logic and interacts with the Database and File Storage for data storage and retrieval.

### Database (Relational Database)

A relational database that stores yarn, pattern, and project data in dedicated tables. It supports complex queries and operations via the API layer and is optimized for performance with indexing and query optimization techniques.

### File Storage (Cloud Storage)

Unstructured data such as pattern charts and project images are stored in cloud storage, providing scalability and reliable access for large files.

### Local Storage (Client-Side Storage)

Temporarily stores unsynced data while the user is offline. When the user reconnects, this data is synced with the backend to ensure consistency across all devices.

## C4 Model Level 3: Component View

### API Layer

The API layer handles all business logic and serves as the intermediary between the web application and the backend services. It is composed of multiple components that handle various aspects of the system:

- **Yarn API**: Handles CRUD operations for managing yarn data.
- **Pattern API**: Manages pattern data and interacts with cloud storage for storing and retrieving pattern charts.
- **Project API**: Manages project data, including progress tracking and project images stored in the cloud.
- **Calculator API**: Performs cost calculations based on yarn usage and project progress.

The API Layer communicates with both the database and file storage containers to retrieve or update data as necessary. This division of responsibilities ensures modularity and maintainability.

![Component - API layer](crochetMS/crochetMS_component_api_layer.svg)

### Database

Main tables:

- Yarn
- Pattern
- Project

# Technical Choices

## ADR #1: Choosing React as the Frontend Framework

### Title

Choosing React as the Frontend Framework for an Offline-First Web Application

### Status

Accepted

### Context

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. The application must support offline functionality, allowing users to view, modify, and sync their data when they regain an internet connection. It must also be user-friendly for non-technical users, handle a moderate amount of data without performance degradation, and be easy to extend and maintain over time. Additionally, we need a solution that supports reusable components.

### Decision Drivers

The following key drivers influenced the decision:

- **Offline Support**: The frontend must support Progressive Web Application (PWA) capabilities, including service workers for caching and background sync, to ensure smooth offline functionality.
- **Component Reusability**: A component-based architecture is essential to simplify UI development and ensure scalability, allowing for the reuse of components like yarn cards, project forms, and pattern uploads.
- **Performance**: The system should handle a moderate number of yarns and projects (hundreds of entries) without noticeable performance degradation.
- **State Management**: Efficient state management is required to manage unsynced changes made while offline, ensuring smooth transitions between offline and online states.
- **Ecosystem**: The library should have a robust ecosystem, including tools for routing, form handling, state management, and offline support.
- **Team Expertise**: The development team has prior experience with React, reducing the learning curve and minimizing the risks of adopting a new technology.

### Alternative Options Considered

- **Vue.js**: Rejected due to its smaller ecosystem compared to React, particularly for advanced state management and offline-first capabilities. While Vue is simpler, it may not provide the same long-term flexibility as React for scaling the project.
- **Angular**: Rejected because of its complexity and heavier framework size, which is not necessary for a project of this size. Angular would introduce a steep learning curve and increase development time due to its strict architecture and advanced tooling.
- **Svelte**: Rejected due to its smaller and less mature ecosystem. While Svelte is simple and performant, it lacks the deep ecosystem support needed for a production-ready offline-first application, particularly in terms of PWA and state management features.

### Decision

We decided to use **React** as the frontend framework.

### Rationale

React was chosen because it directly satisfies the key decision drivers:

- **Offline Support**: React has excellent PWA support, which is critical for implementing offline capabilities. With React, we can easily integrate service workers to handle caching and background syncing, meeting the requirement for a seamless offline-first experience.
- **Component Reusability**: React's component-based architecture allows us to build modular, reusable components, such as yarn cards and project forms. This will streamline development and help us scale the system while maintaining a clean, modular codebase.
- **Performance**: React's virtual DOM enables efficient UI rendering, even with large datasets like hundreds of yarns or projects. This ensures that the system can handle the required data volume without noticeable performance degradation.
- **State Management**: While React alone does not include built-in state management, it integrates well with libraries like Redux, providing the flexibility to handle offline/online state transitions. This allows us to efficiently manage unsynced data and smooth transitions.
- **Ecosystem**: React's mature and extensive ecosystem provides the tools needed for routing, form handling, and state management. This robust ecosystem is essential for building a production-ready offline-first web application.
- **Team Expertise**: The team has significant experience with React, reducing the learning curve and development risks. This allows for faster implementation and reduces the need for additional training.

### Consequences

#### Positive

- **Faster Development**: Leveraging React's component-based architecture and the team's existing experience will allow for rapid development and deployment, reducing the overall project timeline.
- **Reduced Maintenance Overhead**: The reusability of React components will simplify future maintenance, allowing easy updates and modifications without affecting the entire system, leading to long-term sustainability.

#### Negative

- **Complexity in state management**: While React is flexible, managing state (especially offline/online transitions) may require additional libraries like Redux, which can add complexity to the codebase.
- **Bundle size concerns**: As React applications grow, bundle size can become an issue. We may need to optimize the build process to ensure that performance remains acceptable, especially for users with slow connections.

### Conclusion

- In the context of **building an offline-first web application**,
- facing **the need for component reusability, offline support, and a robust ecosystem**,
- we decided to use **React**,
- and neglected **Vue.js, Angular, and Svelte**,
- to achieve **faster development, easier maintenance, and a better user experience**,
- accepting **the trade-offs of potential complexity in state management and bundle size concerns**.

## ADR #2: Choosing Node.js with Express for the Backend (API Layer)

### Title

Choosing Node.js with Express for the Backend of the Offline-First Web Application

### Status

Accepted

### Context

The system is an offline-first web application designed for managing crochet projects, yarn inventory, and crochet patterns. Users will need to be able to work seamlessly while offline and have their data synchronized when they reconnect to the internet. The backend must provide a scalable API to handle requests for yarn, project, and pattern data, support file uploads (e.g., crochet pattern PDFs and images), and manage business logic, such as calculating project costs.

Additionally, the backend must integrate with cloud services (e.g., AWS S3 for file storage) and handle asynchronous tasks, such as syncing offline data when the user reconnects. Given the team's expertise in JavaScript, a solution that minimizes the learning curve and development time while offering high performance for handling I/O-bound operations is crucial. The ability to scale the system in the future is also important, as the application may grow in terms of user base and data volume.

### Decision Drivers

The following key drivers influenced our decision-making process for the backend:

- **Performance and Scalability**: The backend must handle multiple concurrent users efficiently and scale as the system grows. It must be capable of handling tasks like data synchronization, API requests for yarn and project data, and file uploads (patterns).
- **Developer Efficiency and Familiarity**: The development team has significant experience with JavaScript and Node.js. This reduces the time and complexity of development, minimizing risks associated with adopting unfamiliar technologies.
- **RESTful API Support**: The backend needs to support simple and efficient creation of RESTful APIs to handle CRUD operations for yarns, projects, patterns, and calculations.
- **Cloud Integration**: The system must integrate smoothly with cloud services like AWS S3 for file storage and PostgreSQL for structured data. This ensures scalability and the ability to offload certain tasks (like file management) to external services.
- **Maintainability**: The system should be easy to maintain, with a clean and modular structure. The backend should be flexible and adaptable, supporting future growth with minimal refactoring.
- **Authentication**: The backend must support lightweight, stateless user authentication, likely using JWT for securing user access to their inventory and projects.

### Alternative Options Considered

Those options were rejected:

- **Python with Flask**: Flask was considered because of its simplicity and flexibility for building small, RESTful APIs. However, it is synchronous by default, requiring additional configuration to handle concurrent requests efficiently, which would increase complexity. For this reason, Node.js with its non-blocking I/O architecture was preferred for better handling of multiple concurrent requests.
- **Python with Django**: While Django is a powerful full-stack framework with built-in features like an ORM and user management, it was rejected due to its added complexity and heavier architecture, which is unnecessary for this project. The project only requires a lightweight backend for RESTful APIs, making Express a better fit.
- **Ruby on Rails**: Rails was considered for its productivity features and built-in functionality, but it was rejected due to concerns about its performance for handling I/O-bound tasks and the team's unfamiliarity with Ruby. Using Rails would introduce a steep learning curve and increase development time.

### Decision

We decided to use Node.js with Express as the backend framework for building the RESTful API and handling the I/O-bound operations of the offline-first web application.

### Rationale

Node.js with Express was chosen because it meets the project's key requirements:

- **Performance and Scalability**: Node.js is well-suited for handling I/O-bound tasks, such as serving API requests and managing data synchronization, which are key needs for this system. Its event-driven, non-blocking architecture ensures that the backend can handle multiple concurrent requests efficiently.
- **Developer Efficiency and Familiarity**: The development team is already proficient in JavaScript and Node.js, reducing the risk of delays or errors in the development process. This familiarity allows the team to focus on building core features quickly and efficiently.
- **RESTful API Support**: Express is a lightweight and flexible framework that allows for fast and straightforward creation of RESTful APIs. This makes it ideal for managing CRUD operations for yarns, projects, and patterns.
- **Cloud Integration**: Node.js has strong support for integrating with cloud services like AWS S3 (for file storage) and PostgreSQL (for structured data), which aligns with our need for scalable, external storage and database solutions.
- **Maintainability**: Express's minimalist design provides flexibility and simplicity, ensuring that the backend is modular and easy to maintain. This supports future scalability and adaptability as the project grows.
- **Authentication**: Node.js works seamlessly with JWT for stateless authentication, providing secure access to user-specific data while keeping the authentication system lightweight.

### Consequences

#### Positive

- **Efficient I/O Handling**: Node.js's non-blocking, asynchronous nature ensures the backend can efficiently handle I/O-bound tasks such as data synchronization, database queries, and file uploads, which are core operations in this project.
- **Developer Productivity**: The team's familiarity with JavaScript and Node.js reduces onboarding time and allows for faster development, decreasing the overall development risk and ensuring that the team can focus on delivering functionality rather than learning new technologies.
- **Simple API Development**: Express simplifies the creation of RESTful APIs, making it easy to implement CRUD operations for yarns, projects, and patterns, while keeping the codebase maintainable and scalable.
- **Cloud Integration**: Node.js integrates seamlessly with AWS S3 for file storage and PostgreSQL for database management, ensuring that we can scale the storage and database requirements of the system as the user base grows.
- **Maintainability**: The minimalistic nature of Express allows for a modular backend design, which is easy to maintain and extend as the system grows. This also ensures that future requirements, such as new API endpoints or business logic, can be added with minimal refactoring.
- **Stateless Authentication**: Using JWT for authentication ensures lightweight, secure, and scalable access control for users, fitting well with the stateless nature of Node.js and enabling easy scaling.

#### Negative

- **Single-threaded Limitations**: While Node.js handles I/O-bound tasks well, it may struggle with CPU-intensive tasks due to its single-threaded nature. However, this is mitigated because the system's primary operations are I/O-bound (e.g., API requests, file handling), so performance bottlenecks are unlikely.
- **Middleware Complexity**: While Express is lightweight and flexible, it requires additional middleware to handle common backend tasks such as authentication (e.g., JWT), file uploads (e.g., Multer), and error handling. This can introduce complexity, but the wide availability of libraries in the Node.js ecosystem mitigates this challenge.

#### Subsequent ADRs

- A future ADR will be needed to choose the database schema and define the relationships between yarns, projects, and patterns.
- Another ADR may be required to choose a deployment strategy (e.g., containers, serverless) for the Node.js backend.

### Conclusion

- In the context of **building a performant and scalable backend for an offline-first web application**,
- facing **the need for efficient handling of I/O-bound operations and seamless integration with cloud services**,
- we decided to use **Node.js with Express**,
- and neglected **Python with Flask or Django**,
- to achieve **developer efficiency, scalable API support, and cloud service integration**,
- accepting **the trade-off of potential complexity in middleware and single-threaded performance limitations for CPU-bound tasks**.

## ADR #3: Choosing PostgreSQL as the Database

### Title

Choosing PostgreSQL as the Database for the Offline-First Web Application

### Status

Accepted

### Context

The system will manage data for yarn inventory, crochet projects, and patterns, all of which require structured data storage. Users will need to filter, search, and organize their data based on various attributes (e.g., yarn weight, fiber content, project status). The database must be able to handle structured relationships between these entities and support complex queries such as joins and filtering by multiple criteria. In addition, the system must be scalable to support future growth, with efficient querying and data integrity.

The database will be accessed via a RESTful API, and its performance must remain consistent as the user base and data volume grow. The database should also integrate seamlessly with cloud services for backup, recovery, and scalability.

### Decision Drivers

The following key drivers influenced the decision-making process for the database:

- **Relational Data Model**: The system needs a robust relational model to manage relationships between yarn, projects, and patterns, allowing for complex queries and data integrity through features like foreign keys and constraints.
- **Structured Query Support**: The database must support complex queries, such as filtering yarns by attributes and calculating project costs, while ensuring efficient performance even as the dataset grows.
- **Scalability**: The database should allow for easy scaling, both vertically (adding more resources to a single server) and horizontally (distributing data across multiple servers), as the application grows.
- **Full-Text Search**: Efficient full-text search capabilities are needed to enable users to search for patterns or yarns based on keywords or attributes.
- **Backup and Durability**: The database should offer reliable backup, recovery, and high durability to ensure user data is protected.
- **Team Familiarity**: The team has experience with relational databases like PostgreSQL, reducing the learning curve and ensuring that the team can implement the system efficiently.

### Alternative Options Considered

Those options were rejected:

- **SQLite**: Rejected due to its limitations in handling concurrent users and large datasets. SQLite is file-based and best suited for smaller, single-user applications. Since our system requires scalability and the ability to handle multiple users simultaneously, PostgreSQL's client-server architecture is a better fit.
- **NoSQL (e.g., MongoDB)**: Rejected because the project requires complex relationships between entities, which are best modeled using a relational database. NoSQL databases are more suitable for unstructured or semi-structured data and do not natively support the complex querying and relationship constraints that PostgreSQL provides.

### Decision

We decided to use PostgreSQL as the database for the offline-first web application. PostgreSQL's robust relational model, support for complex queries, scalability, and full-text search capabilities make it the best choice for the system's data management needs.

### Rationale

PostgreSQL was chosen because it satisfies the key requirements for managing structured data and supporting the application's long-term scalability:

- **Relational Data Model**: PostgreSQL's strong relational model, including support for foreign keys, constraints, and joins, ensures that we can effectively model the relationships between yarns, projects, and patterns. This will allow for consistent, structured data handling and integrity.
- **Structured Query Support**: PostgreSQL provides powerful query capabilities, allowing the system to handle complex queries, such as filtering yarns by multiple attributes and performing cost calculations for projects.
- **Scalability**: PostgreSQL is designed to scale both vertically and horizontally, which ensures that the database can handle increased user demand and data growth over time.
- **Full-Text Search**: PostgreSQL offers built-in full-text search capabilities, which will be useful for enabling users to search patterns and yarns efficiently.
- **Backup and Durability**: PostgreSQL provides robust backup and recovery options, ensuring that user data is secure and easily recoverable in case of failures.
- **Team Familiarity**: The development team has prior experience working with PostgreSQL, minimizing the learning curve and development risk while ensuring efficient implementation.

### Consequences

#### Positive

- **Efficient Structured Data Handling**: PostgreSQL's relational model and support for complex queries will enable efficient management of yarn, project, and pattern data, ensuring data integrity and high performance even with growing datasets.
- **Scalable Architecture**: PostgreSQL's ability to scale both vertically and horizontally ensures that the system can grow as the user base increases, without compromising performance.
- **Advanced Query Capabilities**: The system will benefit from PostgreSQL's powerful query features, including full-text search, which will allow users to perform complex filtering and searches on their data.
- **Durability and Reliability**: PostgreSQL provides high durability and reliability, including automatic backups and robust recovery options, ensuring that user data is always protected.

#### Negative

- **More Complex Setup Compared to SQLite**: PostgreSQL requires more setup and maintenance than SQLite, particularly in terms of server configuration and management. However, this is mitigated by its scalability and the team's familiarity with PostgreSQL.
- **Overhead for Smaller Projects**: PostgreSQL's full-featured architecture may introduce unnecessary overhead if the system remains small. However, the system is expected to grow over time, and PostgreSQL is better suited for handling long-term scalability needs.

### Conclusion

- In the context of **building a scalable, relational database for managing structured data**,
- facing **the need for complex queries, data integrity, and future scalability**,
- we decided to use **PostgreSQL**,
- and neglected **SQLite**,
- to achieve **efficient data handling, full-text search, and scalability**,
- accepting **the trade-off of increased setup complexity compared to simpler databases like SQLite**.

## ADR #4: Choosing AWS S3 for File Storage

### Title

Choosing AWS S3 for File Storage in the Offline-First Web Application

### Status

Accepted

### Context

The system allows users to upload and store crochet patterns, which can be in various formats such as PDFs or images. These patterns must be securely stored, easily retrievable, and scalable as the number of users and files grows. The storage solution must handle potentially large file sizes while ensuring that the files are backed up and available when needed.

Additionally, the file storage system should integrate with the backend API, allowing users to upload files and retrieve them as part of their project workflows. Security is also a key concern, with file access limited to authenticated users. The system should scale seamlessly with increasing data while remaining cost-effective.

### Decision Drivers

The following key drivers influenced the decision-making process for file storage:

- **Scalability**: The system needs to support increasing amounts of unstructured data as the user base grows. The file storage solution should scale efficiently, with no limitations on the number of files or total storage space.
- **Cost Efficiency**: The storage solution should be cost-effective, particularly for a growing system that may store thousands of files in the future. Pay-as-you-go pricing is preferred to avoid over-provisioning.
- **Backup and Durability**: The files must be backed up and available with a high degree of durability to prevent data loss.
- **Secure Access**: Users' pattern files should only be accessible to authenticated users, and file transfers must be encrypted. Temporary file access (e.g., via pre-signed URLs) should be supported.
- **Ease of Integration**: The storage system must integrate easily with the backend (Node.js with Express), allowing for smooth file uploads, retrieval, and management.
- **Performance**: The system should offer fast file retrieval and upload speeds, particularly for users with large pattern files.

### Alternative Options Considered

Those options were rejected:

- **Azure Blob Storage**: Rejected because, while it offers similar capabilities to AWS S3, the project does not currently use the Azure ecosystem, and the team has more experience with AWS. Switching to Azure would require additional learning and setup costs.
- **Google Cloud Storage**: Rejected for similar reasons as Azure Blob Storage. The team is already more familiar with AWS services, and adopting Google Cloud Storage would introduce additional overhead in terms of learning and configuration.

### Decision

We decided to use AWS S3 as the file storage solution for storing and managing unstructured data, such as crochet patterns (PDFs, images).

### Rationale

AWS S3 was chosen because it meets the system's core requirements for file storage:

- **Scalability**: AWS S3 is designed to scale automatically with no limits on the number of files or storage capacity, making it an ideal solution for a growing user base and increasing amounts of data.
- **Cost Efficiency**: S3 offers a pay-as-you-go pricing model, which is cost-effective for smaller projects while allowing for easy scaling as the system grows. This flexibility ensures that we don't over-provision or incur unnecessary costs.
- **Backup and Durability**: AWS S3 provides 99.999999999% (11 nines) durability by replicating data across multiple availability zones, ensuring that files are highly durable and recoverable in the event of hardware failure.
- **Secure Access**: S3 integrates with AWS Identity and Access Management (IAM) to control access to files. It also supports pre-signed URLs, which allow for temporary access to files, ensuring that only authenticated users can retrieve pattern files.
- **Ease of Integration**: AWS S3 integrates easily with Node.js via the AWS SDK, allowing us to handle file uploads, retrieval, and management with minimal effort. It also integrates with other AWS services we may adopt in the future.
- **Performance**: S3 provides fast, reliable access to files, with options like S3 Transfer Acceleration to further enhance performance for users uploading large files from remote locations.

### Consequences

#### Positive

- **Scalability without Maintenance**: AWS S3 scales automatically as more pattern files are uploaded, requiring no intervention or maintenance. This frees up the development team from needing to manage or adjust storage capacity as the system grows.
- **Pay-as-you-go Model**: The cost structure of AWS S3 ensures that we only pay for the storage we use, which is cost-efficient at the beginning and will remain flexible as the storage needs increase.
- **Built-in Redundancy and Backup**: AWS S3 ensures that data is replicated across multiple locations, providing durability and protection against data loss. This reduces the need for the team to implement their own backup solution.
- **Simple Integration with Backend**: The AWS SDK makes it easy to handle file uploads and retrievals through the existing Node.js backend, simplifying the development effort.

#### Negative

- **AWS-specific Configuration and IAM Management**: Configuring access control and security using AWS IAM roles and policies requires some additional setup. While these features are powerful, managing them can introduce complexity, especially for fine-tuning permissions.
- **Potential Cost Increases**: While the pay-as-you-go model is beneficial initially, costs could increase significantly as the number of users and the amount of stored files grows, especially if not carefully monitored.

### Conclusion

- In the context of **storing and managing large amounts of unstructured data for an offline-first web application**,
- facing **the need for scalable, durable, and cost-effective file storage**,
- we decided to use **AWS S3**,
- and neglected **Azure Blob Storage and Google Cloud Storage**,
- to achieve **automatic scalability, secure access control, and easy cloud integration**,
- accepting **the trade-off of potential vendor lock-in and additional AWS-specific configuration**.

## ADR #5: Choosing Workbox for Offline Support

### Title

Choosing Workbox for Offline Support

### Status

Accepted

### Context

The web application requires offline functionality so that users can manage yarn inventory, projects, and crochet patterns without an internet connection. Users need to view and edit their data while offline, and these changes should automatically sync with the server once the user reconnects.

The offline functionality must allow for:

- **Caching static assets** (HTML, CSS, JS) to enable the app to load when offline.
- **Storing data locally** so that users can access and modify yarn, project, and pattern data offline.
- **Data synchronization**: Any changes made while offline must sync automatically with the server once the user reconnects, ensuring consistency between offline and online states.

### Decision Drivers

The following key drivers influenced the decision-making process for offline support:

- **Seamless User Experience**: Users should be able to work offline without interruptions, with automatic syncing once they reconnect to the internet.
- **Efficient Caching and Data Storage**: The system needs to cache static assets and store dynamic data locally so users can access and modify it even when offline.
- **Automatic Data Syncing**: Offline changes must sync automatically with the server once the user reconnects, without manual intervention.

### Alternative Options Considered

This option was rejected:

- **Custom Service Worker Implementation**: Rejected because implementing a custom solution for caching, background sync, and offline storage requires more effort and maintenance. Workbox simplifies these tasks with minimal configuration.

### Decision

We decided to use Workbox to implement offline support.

### Rationale

Workbox was chosen because it directly addresses the key requirements for offline support, offering a unified solution for caching and background synchronization:

- **Seamless User Experience**: Workbox enables smooth offline functionality by caching static assets and API responses, ensuring users can load and interact with the application even without an internet connection. This aligns with the requirement for uninterrupted offline workflows.
- **Efficient Caching and Data Storage**: Workbox simplifies caching strategies, enabling efficient use of service workers to store static assets and API responses. It also works seamlessly with various offline data storage solutions, ensuring that structured data like yarns and projects can be stored and accessed while offline, meeting the need for robust local data availability.
- **Automatic Data Syncing**: Workbox simplifies the integration of the Background Sync API, which allows any changes made while offline to be synced with the server when the user reconnects. This reduces the need for manual syncing and ensures that the application remains consistent between offline and online states.

### Consequences

#### Positive

- **Reduced Manual Intervention**: By automating the caching of assets and data, as well as syncing changes when the user reconnects, the system reduces the need for manual interventions in both development and user actions.
- **Simplified Maintenance**: Workbox's encapsulation of service workers, caching, and background sync reduces the complexity of building and maintaining custom solutions, making the system easier to support and extend in the future.

#### Negative

- **Initial Complexity in Setup**: Setting up service workers, managing offline data storage, and integrating the Background Sync API requires careful configuration, especially for ensuring consistent offline-to-online transitions.

### Conclusion

- In the context of **providing offline support for a web application**,
- facing **the need for seamless user experience, efficient caching, and automatic data synchronization**,
- we decided to use **Workbox**,
- and neglected **custom service worker implementation**,
- to achieve **reduced manual intervention, and simplified maintenance**,
- accepting **the trade-offs of initial setup complexity**.

## ADR #6: Choosing Last Write Wins (LWW) for Conflict Resolution

### Title

Choosing Last Write Wins (LWW) for Conflict Resolution with Optional User-Assisted Resolution

### Status

Accepted

### Context

The application allows users to work offline and make changes to their data, such as yarn inventory or crochet projects. When the user reconnects to the internet, these offline changes need to be synced with the server. However, conflicts may arise if the user on another device has updated the same data while offline.

The system must automatically resolve such conflicts when syncing, but the solution should be simple to implement and maintain while ensuring consistency. However, in some cases, users may wish to have more control over how their data conflicts are resolved.

### Decision Drivers

The following key drivers influenced the decision-making process for conflict resolution:

- **Simplicity**: The conflict resolution strategy should be easy to implement and maintain without introducing unnecessary complexity.
- **Consistency**: The system must ensure that conflicting changes are resolved in a consistent and predictable manner.
- **Automated Resolution**: For most cases, conflicts should be resolved automatically by the system to avoid overwhelming users with manual conflict resolution tasks.
- **User Control**: In critical scenarios, users may prefer to have control over which version of their data is kept, especially for important project details.

### Alternative Options Considered

- **Manual Conflict Resolution**: This option would involve asking users to manually resolve conflicts by choosing between conflicting versions of data. This was rejected because it introduces unnecessary complexity for users and could slow down workflows. However, this approach could be selectively applied for critical data, offering more flexibility.
- **Versioning**: This strategy creates a version history for each change, allowing the system or the user to resolve conflicts by comparing different versions of the data. While this offers granular control and safety, it was rejected for this phase due to its complexity and the overhead it introduces in terms of storage and version management.
- **Merging Changes**: This option attempts to combine changes from different versions, requiring sophisticated logic to identify conflicts and merge data. While powerful, this was rejected due to the added complexity and potential for unexpected behavior in a system where conflicts are relatively rare and simple.

### Decision

We decided to implement Last Write Wins (LWW) as the primary conflict resolution strategy, combined with optional user-assisted conflict resolution for critical cases. LWW resolves conflicts by overwriting the previous data with the most recent update based on a timestamp. However, for certain sensitive data (e.g., project milestones or financial calculations), the system will allow users to manually resolve conflicts when needed.

### Rationale

The Last Write Wins (LWW) strategy was chosen because it satisfies the project's key requirements of simplicity and consistency, while the introduction of optional user-assisted resolution for key scenarios provides a safety net for handling more sensitive data.

- **Simplicity**: LWW is a straightforward solution that requires minimal development effort. By simply comparing timestamps of conflicting data and accepting the most recent update, implementation remains lightweight and easy to manage.
- **Consistency**: LWW ensures that data remains consistent across the system after conflicts are resolved, preventing duplicate or outdated information. Since most data in the system (e.g., yarn inventory) is not highly sensitive, automated resolution fits well.
- **Automated Resolution**: For most data, users are not required to take action. The system handles conflicts automatically, allowing for a smooth and uninterrupted user experience.
- **User Control for Critical Data**: For key data elements (e.g., completed project stages, financial records), users will have the option to manually resolve conflicts when reconnecting to the internet. This provides flexibility without complicating the system for less important data.

### Consequences

#### Positive

- **Lower Risk of User Confusion**: For the majority of data, LWW resolves conflicts automatically, reducing the chance that users will encounter confusing conflict resolution workflows. For critical data, the user-assisted option ensures that data loss is minimized where it matters most.
- **Reduced Development Time**: Implementing LWW requires less development effort than more complex strategies like versioning or merging. This allows the project to focus on core functionalities without getting bogged down by conflict resolution complexities.
- **Predictable Behavior**: The LWW approach provides consistent and predictable behavior, making it easier for both users and developers to understand how conflicts are resolved. With the option to allow manual resolution for critical data, users retain control where needed.
- **Scalability**: The simplicity of LWW makes it easy to scale as the system grows, allowing for conflict resolution to remain efficient even as the number of users and devices increases.

#### Negative

- **Potential Data Loss in LWW**: In scenarios where LWW is applied, older changes may be overwritten without user input. However, by restricting manual conflict resolution to key scenarios, the system mitigates the risk of data loss for important data.
- **Additional Complexity for User-Assisted Resolution**: Introducing optional manual conflict resolution adds a bit of complexity in terms of development and user experience. However, this complexity is limited to a subset of critical data, balancing user control with system automation.

### Conclusion

- In the context of **providing conflict resolution for an offline-first web application**,
- facing **the need for simplicity, consistency, automated resolution, and user control in critical scenarios**,
- we decided to use **Last Write Wins (LWW)** for the majority of data with **optional user-assisted conflict resolution** for critical data,
- and neglected **manual conflict resolution, versioning, and merging changes**,
- to achieve **reduced user confusion, predictable behavior, scalability, and data safety**,
- accepting **the trade-offs of potential data loss for non-critical data under LWW** and **additional complexity for manual resolution in key cases**.

## ADR #7: Choosing a Distributed Architecture

### Title

Choosing a Distributed Architecture

### Status

Accepted

### Context

The system is designed for crochet enthusiasts to manage yarn inventory, track projects, store crochet patterns, and monitor associated costs. The current scope targets a small number of users, but the system must be able to scale as new features are added, third-party integrations are introduced, and the user base grows over time.

To ensure long-term flexibility, scalability, and ease of introducing new components or integrations, the choice of architecture must balance initial simplicity with the ability to evolve and grow over time.

### Decision Drivers

The following key factors influence the architecture decision:

- **Scalability**: The architecture must allow for scaling as the user base grows and as different components of the system (e.g., yarn management, project management) require more resources.
- **Future Integrations**: The system may need to support third-party services (e.g., yarn price APIs, pattern repositories) and new features in the future. The architecture must accommodate these integrations with minimal disruption.
- **Cost Efficiency**: The system should remain cost-effective at its current scale while providing a clear path for handling increased operational complexity as it grows.
- **Maintainability**: The architecture should make it easy to manage, update, and debug individual components of the system.

### Alternative Options Considered

- **Monolithic Architecture**: A monolithic approach bundles all components into a single deployment unit, simplifying early development and deployment. However, it was rejected because it introduces scalability limitations, as the entire application would need to be deployed or scaled as a single unit. This would also make future integrations more complex and require greater refactoring efforts as the system grows.

### Decision

We decided to adopt a distributed architecture, beginning with a modular approach where individual services (e.g., yarn management, project management) are designed as independent components. Initially, these services may be deployed together, but the architecture will allow for gradual decoupling into independent deployment units as the system grows.

### Rationale

The distributed architecture was chosen because it best supports the system's long-term goals of scalability, flexibility, and independent service management:

- **Scalability**: As the user base grows or new features are introduced, services can be scaled independently without affecting other components.
- **Future-Proofing**: Distributed architecture supports the integration of third-party services and new features more easily, without needing a complete system overhaul.
- **Modular Evolution**: Starting with loosely coupled services within a distributed system allows for future migration to a microservices approach, but without the complexity and overhead of full microservices from the start.

### Consequences

#### Positive

- **Easier Maintenance Over Time**: The modular structure will make it easier to manage, update, and debug individual components without affecting the entire system. This will reduce the long-term technical debt associated with the system's evolution.
- **Faster Time to Market for New Features**: The ability to independently develop, update, and deploy different parts of the system will allow faster iteration and deployment of new features or services without requiring full redeployments of the entire system.
- **Improved Resource Allocation**: Independent scaling of components means resources can be allocated efficiently based on the actual usage patterns of different parts of the system (e.g., scaling the yarn management service separately from the project tracking service).
- **Better User Experience**: Updates and changes to specific services can be made with minimal or no downtime, providing a smoother and more reliable user experience.

#### Negative

- **Initial Complexity**: While not as complex as full microservices, distributed architecture introduces some complexity in managing communication between services and ensuring consistency.
- **Potential Overhead for Small Scale**: In the early stages, with a small user base, the overhead of managing distributed services may add unnecessary complexity compared to a monolithic architecture.

### Subsequent ADRs

- A future ADR may define the specific strategies for managing communication between distributed services, such as choosing between REST APIs, message queues, or event-driven communication.

### Conclusion

- In the context of **designing a scalable and flexible system for a small but growing user base**,
- facing **the need for long-term scalability, support for future integrations, and maintainability**,
- we decided to use a **distributed architecture**,
- and neglected **monolithic architecture**,
- to achieve **flexibility, scalability, and modular development**,
- accepting **the trade-off of initial complexity and potential overhead for managing distributed services in the early stages**.

## ADR #8: Choosing a Third-Party Authentication Service

- In the context of **building a cost-effective and scalable web application with user authentication**,
- facing **the need for strong security, minimal development effort, and future scalability**,
- we decided to use **third-party authentication services**,
- and neglected **building custom authentication system**,
- to achieve **faster implementation, robust security features, and long-term scalability**,
- accepting **the trade-off of potential vendor lock-in and ongoing service costs**.

## ADR #9: Choosing an Automated Cloud Backups

- In the context of **ensuring data reliability and recovery for user-uploaded files and database records**,
- facing **the need for scalable, cost-effective, and low-maintenance backup solutions**,
- we decided for **using automated cloud backups**,
- and neglected **manual backup processes**,
- to achieve **automated, reliable backups with minimal ongoing maintenance and easy recovery**,
- accepting **the trade-off of potential vendor lock-in and ongoing service costs**.

# Appendix

## Structurizr diagram

[Structurizr](https://structurizr.com/) diagram code for Crochet Management System:

```
workspace {
  model {
    user = person "Crocheter" {
      description "Crocheting Enthusiast"
    }

    crochetApp = softwareSystem "Crochet Management System" {
      webApp = container "Web Application" {
        technology "TypeScript, React"
        description "Allows users to manage yarns, patterns, and projects"
        tags "Web Browser"
      }

      api = container "API Layer" {
        technology "Node.js, Express.js"
        description "Exposes CRUD operations for managing yarns, patterns, and projects"

        patternAPI = component "Pattern API" {
          technology "Node.js, Express.js"
          description "Manages pattern-related data"
        }
        projectAPI = component "Project API" {
          technology "Node.js, Express.js"
          description "Manages project-related data"
        }
        yarnAPI = component "Yarn API" {
          technology "Node.js, Express.js"
          description "Manages yarn-related data"
        }
        calculatorAPI = component "Calculator API" {
          technology "Node.js, Express.js"
          description "Handles logic for project cost and yarn price calculations"
        }
      }

      database = container "Database" {
        technology "PostgreSQL"
        description "Stores yarns, patterns, and projects"
        tags "Database"

        yarnTable = component "Yarn table"
        patternTable = component "Pattern table"
        projectTable = component "Project table"
      }

      fileStorage = container "File Storage" {
        technology "AWS S3"
        description "Stores pattern charts and project images"
      }

      localStorage = container "Local Storage" {
        technology "Workbox"
        description "Temporarily stores unsynced data while offline"
      }
    }

    user -> webApp "Manages yarns, patterns, and projects"
    webApp -> api "Makes API calls" "JSON/HTTPS"
    webApp -> localStorage "Stores local unsynced data"

    api -> database "Reads from and writes to" "SQL"
    yarnAPI -> database "Reads from and writes to" "SQL"
    patternAPI -> database "Reads from and writes to" "SQL"
    projectAPI -> database "Reads from and writes to" "SQL"
    calculatorAPI -> database "Reads from and writes to" "SQL"
    patternAPI -> fileStorage "Stores and retrieves pattern charts"
    projectAPI -> fileStorage "Stores and retrieves project images"
  }

  views {
    theme default

    systemContext crochetApp {
      include *
      autolayout
      title "[System Context] Crochet Management System"
    }

    container crochetApp {
      include *
      autolayout lr
      title "[Container] Crochet Management System"
    }

    component api {
      include *
      autolayout
      title "[Component] API Layer"
    }

    component database {
      include *
      autolayout
      title "[Component] Database"
    }

    styles {
      element "External" {
        background grey
      }
      element "Web Browser" {
        shape WebBrowser
      }
      element "Database" {
        shape Cylinder
      }
    }

    properties {
      structurizr.softwareSystemBoundaries true
      c4plantuml.stdlib false
    }
  }
}
```