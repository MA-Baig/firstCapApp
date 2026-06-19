using my.firstcap as myFirstCap from '../db/schema';

service bookService {
    @odata.draft.enabled
    entity Books as projection on myFirstCap.Books;

}