import PeopleList from "./PeopleList.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <div>
        <div id="id">STT: </div>
        <div id="name">Tên lớp: </div>
        <div id="teacher">Giảng viên: </div>
        <div id="students">Danh sách học sinh: </div>
        <div id="status">Trạng thái: </div>
    </div>
    <br>
`;
export default class ClassList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$id = this.shadowRoot.getElementById("id");
        this.$name = this.shadowRoot.getElementById("name");
        this.$teacher = this.shadowRoot.getElementById("teacher");
        this.$students = this.shadowRoot.getElementById("students");
        this.$status = this.shadowRoot.getElementById("status");
    }

    static get observedAttributes() {
        return ["id", "name", "teacher", "students", "status"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case "id":
                this.$id.innerHTML += newValue;
                console.log(newValue);
                break;
            case "name":
                this.$name.innerHTML += newValue;
                console.log(this.$name.innerHTML);
                break;
            case "teacher":
                let $teacherList = document.createElement("people-list");
                $teacherList.setAttribute("name", JSON.parse(newValue).name);
                $teacherList.setAttribute("age", JSON.parse(newValue).age);
                $teacherList.setAttribute(
                    "address",
                    JSON.parse(newValue).address
                );
                this.$teacher.appendChild($teacherList);
                break;
            case "students":
                let students = JSON.parse(newValue);
                for (let student of students) {
                    let $student = document.createElement("people-list");
                    $student.setAttribute("name", student.name);
                    $student.setAttribute("age", student.age);
                    $student.setAttribute("address", student.address);
                    this.$students.appendChild($student);
                }
                break;
            case "status":
                this.$status.innerHTML += newValue;
                break;
        }
    }
}

window.customElements.define("class-list", ClassList);
