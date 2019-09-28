import { decorate, observable, action } from "mobx";

export default class PageNav {
    page = "pic";
    scrollVal = 0;
    lastScrollVal = 0;
    actualScroll = 0;

    setPage(page) {
        this.page = page;
        // this.updateActiveStyle(page);
    }

    setScrollVal(scrollVal) {
        this.actualScroll = this.lastScrollVal + scrollVal
        this.scrollVal = scrollVal;
    }

    setActualScroll(actualScroll){
        this.actualScroll = actualScroll
    }

    setlastScrollVal(lastScrollVal) {
        this.lastScrollVal = lastScrollVal;
    }

    // updateActiveStyle(page) { }
}

decorate(PageNav, {
    page: observable,
    setPage: action,
    setScrollVal: action,
    setlastScrollVal: action,
    actualScroll: observable,
    setActualScroll: action,
});