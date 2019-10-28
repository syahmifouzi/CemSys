import { decorate, observable, action } from "mobx";

export default class PageNav {
    page = "home";
    scrollVal = 0;
    lastScrollVal = 0;
    actualScroll = 0;
    actualIndex = 0;
    correctCount = 0;
    passLoc = 0;
    barCount = 0
    barFlag = 0
    is_registered = null;
    colourIndex = 0;
    password = '';
    refreshPizza = 0
    barTimer = 0;

    setPage(page) {
        this.page = page;
        // this.updateActiveStyle(page);
    }

    setScrollVal(scrollVal) {
        this.actualScroll = this.lastScrollVal + scrollVal
        this.scrollVal = scrollVal;
    }

    setActualScroll(actualScroll, actualIndex) {
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

    setIs_registered(is_registered) {
        this.is_registered = is_registered;
    }

    setColourIndex(colourIndex) {
        this.colourIndex = colourIndex;
    }

    setPassword(password) {
        this.password = password;
    }

    setBarCount(barCount) {
        this.barCount = barCount
    }

    setBarFlag(barFlag) {
        this.barFlag = barFlag
    }

    setRefreshPizza(refreshPizza) {
        this.refreshPizza = refreshPizza
    }

    setBarTimer(barTimer) {
        this.barTimer = barTimer
    }
}

decorate(PageNav, {
    page: observable,
    setPage: action,
    setScrollVal: action,
    setlastScrollVal: action,
    actualScroll: observable,
    setActualScroll: action,
    correctCount: observable,
    setCorrectCount: action,
    setPassLoc: action,
    refreshPizza: observable,
    setRefreshPizza: action,
    setBarCount: action,
    setIs_registered: action,
    setColourIndex: action,
    setPassword: action,
    setBarFlag: action,
    setBarTimer:action,
});