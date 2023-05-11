export function isBookRead(books, titleSearch) {
    const desiredBook = books.find((book) => {
        return book.title === titleSearch;
    });
    if (!desiredBook) return false;
    const { isRead } = desiredBook;
    return isRead;
}
