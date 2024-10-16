
/**
 * Функция, имитирующая запрос к API. Возвращает результат через 5-16 секунд
 * @returns объект Promise
 */
export const callAPI = () => {

    const ms = 5000 + (Math.random() * 11000);

    return new Promise<string>((resolve, reject) => {
        setTimeout(
            () => {
                console.log("Запрос завершен")
                resolve("123456");
            }, 
            ms,
        )
    })
}