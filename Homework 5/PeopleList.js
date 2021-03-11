const $template = document.createElement("template");
$template.innerHTML = `
    <ul>
        <li id="name"></li>
        <li id="age"></li>
        <li id="address"></li>
    </ul>
`;

export default class PeopleList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById("name");
        this.$age = this.shadowRoot.getElementById("age");
        this.$address = this.shadowRoot.getElementById("address");
    }

    static get observedAttributes() {
        return ["name", "age", "address"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case "name":
                this.$name.innerHTML = `Tên: ${newValue}`;
                console.log(newValue);
                break;
            case "age":
                this.$age.innerHTML = `Tuổi: ${newValue}`;
                console.log(newValue);
                break;
            case "address":
                this.$address.innerHTML = `Địa chỉ: ${newValue}`;
                break;
        }
    }
}

window.customElements.define("people-list", PeopleList);
