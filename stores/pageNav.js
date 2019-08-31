import { decorate, observable, action } from "mobx";

export default class PageNav {
    page = "home";

    setPage(page) {
        this.page = page;
        // this.updateActiveStyle(page);
    }

    // updateActiveStyle(page) { }
}

decorate(PageNav, {
    page: observable,
    setPage: action
});