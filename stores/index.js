import PageNav from './pageNav';

class RootStore {
    constructor() {
        this.pageNav = new PageNav(this);
    }
}

const rootStore = new RootStore();

export default rootStore;