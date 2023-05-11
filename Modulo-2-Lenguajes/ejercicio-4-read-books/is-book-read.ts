export interface Book {
    title: string;
    isRead: boolean;
}

export function isBookRead(books: Book[], titleSearch: string) {
    const desiredBook = books.find((book) => {
        return book.title === titleSearch;
    });
    if (!desiredBook) return false;
    const { isRead } = desiredBook;
    return isRead;
}
