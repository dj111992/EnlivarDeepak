class ExistingAssets{
getExistingAsset() {
    return cy.get('[href="#/assets"]');
}

getSearchAssetTextBox() {
    return cy.get('[class="form-control form-control-sm ml-0 my-1"]');
}

getTable() {
    return cy.get('[class="table table-bordered table-hover table-striped dataTable"]');
}


}
export default ExistingAssets