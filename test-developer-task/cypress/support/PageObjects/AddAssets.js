class AddAssets{
getAddAsset() {
    return cy.get('[testid="add-asset"]');
}

getAddAssetTextBox() {
    return cy.get('[id="defaultFormAddAsset"]');
}

getSendButton() {
    return cy.get('[data-test="button"]');
}

getTitle() {
    return cy.get('[class="modal-title"]');
}

getCloseButton() {
    return cy.get('[class="btn-warning btn Ripple-parent"]');
}

getFeedbackTitle() {
    return cy.get('[class="valid-feedback"]');
}


}
export default AddAssets