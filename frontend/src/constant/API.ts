const ADDRESS = "http://127.0.0.1:8000"
const NEWS = ADDRESS + "/News"
const INTRODUCTION = {
    "vision" : ADDRESS + "/Introduction/vision",
    "history" : ADDRESS + "/Introduction/history",
    "mission" : ADDRESS + "/Introduction/mission",
    "chart" : ADDRESS + "/Introduction/chart",
    "statute" : ADDRESS + "/Introduction/statute",
    "values" : ADDRESS + "/Introduction/values",
    "permissions" : ADDRESS + "/Introduction/permissions",
    "audit" : ADDRESS + "/Introduction/reports/audit",
    "performance" : ADDRESS + "/Introduction/reports/performance",
    "financial" : ADDRESS + "/Introduction/reports/financial",
    "faq" : ADDRESS + "/Introduction/faq",
}

const MEMBERS = {
    "previousـboardـmembers" : ADDRESS + "/Members/previous-board",
    "currentـboardـmembers" : ADDRESS + "/Members/ current-board",
    "members_of_the_board_of_trustees" : ADDRESS + "/Members/trustees",
    "members_of_the_founding_board" : ADDRESS + "/Members/founders",
    "investigators" : ADDRESS + "/Members/inspectors",
    "members_of_the_general_assembly" : ADDRESS + "/Members/members",
}
export {NEWS, INTRODUCTION, MEMBERS}