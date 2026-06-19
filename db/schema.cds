namespace my.firstcap;
using { cuid } from '@sap/cds/common';


entity Books: cuid {
    // key ID     : Integer;
        Title  : String;
        Author : String;
}