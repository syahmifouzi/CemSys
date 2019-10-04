import { decorate, observable, action } from "mobx";

export default class PageNav {
    page = "home";
    scrollVal = 0;
    lastScrollVal = 0;
    actualScroll = 0;
    actualIndex = 0;
    correctCount = 0;
    passLoc = 0;
    refreshPizza = 0;

    setPage(page) {
        this.page = page;
        // this.updateActiveStyle(page);
    }

    setScrollVal(scrollVal) {
        this.actualScroll = this.lastScrollVal + scrollVal
        this.scrollVal = scrollVal;
    }

    setActualScroll(actualScroll,actualIndex){
        this.actualScroll = actualScroll
        this.actualIndex = actualIndex
    }

    setlastScrollVal(lastScrollVal) {
        this.lastScrollVal = lastScrollVal;
    }
    
    setCorrectCount(correctCount) {
        this.correctCount = correctCount;
    }

    setPassLoc(passLoc) {
        this.passLoc = passLoc;
    }

    setRefreshPizza(refreshPizza){
        this.refreshPizza = refreshPizza;
    }
}

decorate(PageNav, {
    page: observable,
    setPage: action,
    setScrollVal: action,
    setlastScrollVal: action,
    actualScroll: observable,
    setActualScroll: action,
    setCorrectCount: action,
    setPassLoc: action,
    refreshPizza: observable,
    setRefreshPizza: action,
});