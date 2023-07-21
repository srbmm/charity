const ADDRESS = "http://127.0.0.1:8000"
const NEWS = ADDRESS + "/news"
const SELECTED_NEWS = NEWS + "/selected"
const SUPPORTER = ADDRESS + "/supporters"
const SELECTED_SUPPORTER = SUPPORTER + "/main-page"
const SUPPORT_TOPIC = ADDRESS + "/supportTopics/all"
const PROJECTS = ADDRESS + "/projects/all"

const INTRODUCTION = {
    "vision" : ADDRESS + "/introduction/vision",
    "history" : ADDRESS + "/introduction/history",
    "mission" : ADDRESS + "/introduction/mission",
    "chart" : ADDRESS + "/introduction/chart",
    "statute" : ADDRESS + "/introduction/statute",
    "values" : ADDRESS + "/introduction/values",
    "permissions" : ADDRESS + "/introduction/permissions",
    "audit" : ADDRESS + "/introduction/reports/audit",
    "performance" : ADDRESS + "/introduction/reports/performance",
    "financial" : ADDRESS + "/introduction/reports/financial",
    "partners" : ADDRESS + "/introduction/partners/",
    "faq" : ADDRESS + "/introduction/faq",
}

const MEMBERS = {
    "previousـboardـmembers" : ADDRESS + "/members/previous-board",
    "currentـboardـmembers" : ADDRESS + "/members/current-board",
    "members_of_the_board_of_trustees" : ADDRESS + "/members/trustees",
    "members_of_the_founding_board" : ADDRESS + "/members/founders",
    "investigators" : ADDRESS + "/members/inspectors",
    "members_of_the_general_assembly" : ADDRESS + "/members/members",
}
const INFO = {
    info: ADDRESS + "/Info/info/",
    links: ADDRESS + "/Info/links/",
}

// need slash at the end of post path
const FORM = {
    cash: ADDRESS + "/support/cash/",
    nonCash: ADDRESS + "/support/non-cash/",
}




export {NEWS, INTRODUCTION, MEMBERS, SELECTED_NEWS, INFO, SUPPORTER, FORM, SUPPORT_TOPIC, PROJECTS, SELECTED_SUPPORTER}