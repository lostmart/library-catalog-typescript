# library-catalog-typescript

The Book Library Catalog system allows users to manage a collection of books, including functionalities to add, remove, search, and categorize books. It could also provide features to track which user has borrowed which books, due dates for returns, and even user ratings and reviews for each book.

## Key Features

1. ### Book Management
   - Add new books to the catalog
   - Remove books from the catalog
   - Update details of existing books
2. ### Search Functionality
   - Search for books by title, author, or genre
   - Advanced search to combine multiple search parameters
3. ### Borrowing System
   - Check out books to users with a due date for return
   - Check in books that are returned
   - List all books currently checked out and overdue books
4. ### User Management
   - Register new users
   - Update user information
   - Track the borrowing history of users
5. ### Review and Rating System
   - Allow users to rate and review books
   - Display average ratings and read reviews for each book

## TypeScript Application

### a. Classes

- **Book:** Represents a book with properties like title, author, genre, ISBN, and availability.
- **User:** Represents a library user with properties like user ID, name, and a list of borrowed books.

### b. Interfaces

- **IBook:** Interface to define the structure for book objects
- **IUser:** Interface to define the structure for user objects
- **ISearchCriteria:** Interface to define the parameters available for searching books

### c. Enums

- **Genre:** Enum to list genres like Fiction, Non-Fiction, Science, Literature, etc.
- **BookStatus:** Enum to represent the status of a book (Available, Borrowed, Overdue)

### d. Generics

- **DataManager<T>:** A generic class for managing operations like add, delete, and update on any entity type, e.g., books or users.

### e. Modules

Split the application into different modules:

- **BookModule:** Handling all book-related operations
- **UserModule:** Managing user registrations and updates
- **LoanModule:** Operations related to borrowing and returning books
- **SearchModule:** Implementing search functionalities

## Implementation Notes

- Utilize TypeScript's strong typing to ensure that all interactions with book and user objects adhere to defined interfaces, preventing runtime errors and improving code quality.
- Use modules to keep code organized and maintainable, making it easier to manage as the project grows
- Implement error handling to manage and respond to typical issues like book not found, user not registered, and data validation errors
