//import React from 'react';





//Pre-loader image, get replaced by MainDiv component once loading is over
class ReactPreLoader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return e(
            'div', { id: "pre-loader", className: "pre-loader-div-show" },
            e('p', null, "Hello World from react"),
            e('img', { src: "Images/preLoader.gif" })
        )
    }
}
//Main div appears after preloader completed, loads MainDivMenu and MainDivBodyWelcome (as default component of body)
class MainDiv extends React.Component {
    constructor(props) {
        super(props)
        //default container to load first
        this.state = {
            mainDivBodyComponent: MainDivBodyUpdate
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) { //use this property on MainDiv to re- render child mainDivBody component 
        this.setState({
            mainDivBodyComponent: event
        })
    }
    render() {
        return e('div', { className: "app" },
            e('div', { className: "logo", style: { float: "right" } },
                e('img', { src: logoURL, id: "logo", width: "100", height: "9" }
                )
            ),
            e('div',{className: "size-of-DB"},
                e('label', { id: 'knowledgeBaseQty'}, 0)
                ),
            e('div', { className: "main-div", style: { clear: "right" } },
                e(MainDivMenu, { handleChange: this.handleChange }), //we pass to the MainDivMEnu function which changes the state of Main Div
                e(this.state.mainDivBodyComponent)
            )
        )
    }
}
//Top navigation menu of Main div
class MainDivMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //for each element in menu class must be defined
            //to add new just add new object
            home: { menu: 'non-active', title: 'Home', component: MainDivBodyWelcome },
            detector: { menu: 'non-active', title: 'Detector', component: MainDivBodyDetector },
            parser: { menu: 'non-active', title: 'Parser', component: MainDivBodyWelcome },
            header: { menu: 'non-active', title: 'Header', component: MainDivBodyHeader },
            structure: { menu: 'non-active', title: 'Structure', component: MainDivBodyStructure },
            update: { menu: 'active', title: 'Update', component: MainDivBodyUpdate },
            columns: { menu: 'non-active', title: 'Columns', component: MainDivBodyWelcome },

        }
        this.menuClick = this.menuClick.bind(this);
    }
    //function for click event
    menuClick(a) {
        //stop detector if any other menu clicked, rather then topnav-detector
        if (a.target.id !== 'topnav-detector') { CT.stopDetector() }
        //clone this.state and change the menu property depending on target a
        let cloneOfState = Object.assign({}, this.state)
        for (let key in cloneOfState) {
            cloneOfState[key].menu = (a.target.id === `topnav-${key}`) ? 'active' : 'non-active'
        }
        //set new state from clone
        this.setState(cloneOfState)
        //handleChange() is the function which was recieved from MainDiv - through props
        //change the child container depends what item was clicked
        this.props.handleChange(cloneOfState[a.target.id.substr(7)].component)
    }
    render() {
        //go through all this.state properties and put the anchor element
        let menus = [];
        for (let key in this.state) {
            menus.push(e('a', { key: key, href: '#', id: `topnav-${key}`, className: this.state[key].menu, onClick: this.menuClick }, this.state[key].title))
        }
        return e(
            'div', { className: "topnav" },
            menus
        )
    }
}
//Welcome container - appears in the beginning
class MainDivBodyWelcome extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return e(
            'div', { id: "main-div-body" },
            e('h1', {}, 'Welcome'),
            e('p', {}, 'You have successfully loaded HUBER+SUHNER DC Calc Tool'),
            e('p', {}, 'where you can use following tools:')
        )
    }
}
//Detector container
class MainDivBodyDetector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkboxClicked: false //holds checkbox state: true then detector runs, else stopped
        }
        this.clicked = this.clicked.bind(this);
        CT.stopDetector();
    }
    clicked() {
        this.setState((state, props) => {
            //controls the checkbox click event and activates or deactivates detector
            if (!state.checkboxClicked) {
                CT.startDetector();
            } else {
                CT.stopDetector();
            }
            //change the state of checkbox
            return { checkboxClicked: !this.state.checkboxClicked }
        })
    }
    render() {
        return e(
            'div', { id: "main-div-body" },
            e('h1', {}, 'Detector'),
            e('p', {}, 'Detector controls selection of cells on active page and if it recognizes item number or descriptive code then he provides full information from knowledge base about the product'),
            e('p', {}, 'Once you change to another page, the detector will stop, but last data will be always stored'),
            e('p', {}, 'Detector function: =DCPEDIA.DETECT_PRODUCT(string)'),
            e('label', { className: "switch" },
                e('input', { type: "checkbox", onClick: this.clicked }),
                e('span', { className: "slider round" })
            ),
            e('div', { id: "detector-knowledge-base-div" })
        )
    }
}
//Header - generates header
//TODO: Store filled form in cookies and load from cookies every time the Header module is loaded
class MainDivBodyHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            docType: 'Document type',
            docNumber: "Number",
            docCode: 'Code',
            docDescription: 'Put here your description. Dont use too much words',
            docCustomerName: 'Your customer name',
            docCustomerDetails: 'Your customer details',
            docYourName: 'Your name',
            docYourEmail: 'your@email',
            docCurrency: 'CHF'
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.updateCanvas = this.updateCanvas.bind(this);
    }
    handleChange(event) {
        this.setState({
            docType: event.target.id === "docType" ? event.target.value : this.state.docType,
            docNumber: event.target.id === "docNumber" ? event.target.value : this.state.docNumber,
            docCode: event.target.id === "docCode" ? event.target.value : this.state.docCode,
            docDescription: event.target.id === "docDescription" ? event.target.value : this.state.docDescription,
            docCustomerName: event.target.id === "docCustomerName" ? event.target.value : this.state.docCustomerName,
            docCustomerDetails: event.target.id === "docCustomerDetails" ? event.target.value : this.state.docCustomerDetails,
            docYourName: event.target.id === "docYourName" ? event.target.value : this.state.docYourName,
            docYourEmail: event.target.id === "docYourEmail" ? event.target.value : this.state.docYourEmail,
            docCurrency: event.target.id === "docCurrency" ? event.target.value : this.state.docCurrency,
        })
    }
    submitForm(event) {
        addHeaderFromForm(this.state)
    }
    updateCanvas() {
        let canvas = document.getElementById('canvasTemplate');
        let ctxCanvas = canvas.getContext('2d');
        let loadImage = async () => {
            let img = await loaderImage(headerURL);
            ctxCanvas.drawImage(img, 0, 0, 310, 100);
        }
        loadImage()
    }
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    render() {
        return e(
            'div', { id: "main-div-body" },
            e('h1', {}, 'Header'),
            e('p', {}, 'Adds the picture header to the active sheet.'),
            e('p', {}, 'Brings standartization to every excel based quotation.'),
            e('p', {}, 'Fill in the form and submit to generate header'),
            e('br'),
            e('canvas', { id: 'canvasTemplate', width: '310', height: '100' }, "Your browser doesn't support canvas"),
            e('form', { className: 'headerForm' },
                e('br'),
                e('input', { id: "docType", type: "text", value: this.state.docType, onChange: this.handleChange }),
                e('br'),
                e('input', { id: "docNumber", type: "text", value: this.state.docNumber, onChange: this.handleChange }),
                e('br'),
                e('input', { id: "docCode", type: "text", value: this.state.docCode, onChange: this.handleChange }),
                e('br'),
                e('textarea', { rows: 4, cols: 40, id: "docDescription", value: this.state.docDescription, onChange: this.handleChange }),
                e('br'),
                e('input', { type: "text", id: "docCustomerName", value: this.state.docCustomerName, onChange: this.handleChange }),
                e('br'),
                e('input', { type: "text", id: "docCustomerDetails", value: this.state.docCustomerDetails, onChange: this.handleChange }),
                e('br'),
                e('input', { type: "text", id: "docYourName", value: this.state.docYourName, onChange: this.handleChange }),
                e('br'),
                e('input', { type: "text", value: this.state.docYourEmail, id: "docYourEmail", onChange: this.handleChange }),
                e('br'),
                e('input', { type: "text", id: "docCurrency", value: this.state.docCurrency, onChange: this.handleChange }),
                e('br'),
                e('button', { type: "button", onClick: this.submitForm }, "Submit!")
            )
        )
    }
}
//Structure - navigate through the product structure 
class MainDivBodyStructure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allLabels: [
                'product group',
                'product sub-group',
                'product category',
                'product sub-category',
                'polarity',
                'base type',
                'fiber type',
                'length'],
            allFields: [
                'Product Group',
                'Product Level 3',
                'Product Level 4',
                'Product Level 5',
                'Polarity',
                'Base Type',
                'Fiber_type_Category',
                'Length'],
            resultData: {
                "Item Number": CT.reSortKnowBase.resortedAll[ITEMNUMBER],
                "Descriptive Code": CT.reSortKnowBase.resortedAll[DESCRCODE]
            },
            selOptions: {
                'Product Group': 'any',
                'Product Level 3': 'any',
                'Product Level 4': 'any',
                'Product Level 5': 'any',
                'Polarity': 'any',
                'Base Type': 'any',
                'Fiber_type_Category': 'any',
                'Length': 'any'
            }
        }
        this.addOptions = this.addOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let newSelOptions = this.state.selOptions;
        newSelOptions[event.target.id] = event.target.value;
        this.setState({
            selOptions: newSelOptions,
            resultData: selectFromTableWhere([ITEMNUMBER, DESCRCODE],
                CT.reSortKnowBase.resortedAll,
                newSelOptions)
        })
    }
    addOptions(key) {
        let arr = [];
        for (let i = 0; i <= CT.reSortKnowBase.resortedUnique[key].length; i++) {
            if (i === 0) {
                arr.push(e('option', { key: 'any', value: 'any' }, 'any'))
            } else {
                arr.push(e('option', {
                    key: i - 1,
                    value: CT.reSortKnowBase.resortedUnique[key][i - 1]
                },
                    CT.reSortKnowBase.resortedUnique[key][i - 1])
                )
            }
        }
        return arr
    }
    render() {
        let selects = [];
        let index = 0;
        this.state.allFields.map((field) => {
            selects.push(e('label', { htmlFor: field, key: `label-${field}` }, `Choose ${this.state.allLabels[index]}`));
            selects.push(e('select', { id: field, key: `select-${field}`, onChange: this.handleChange }, this.addOptions(field)));
            index++;
        })
        return e('div', { id: "main-div-body" },
            e('h1', {}, 'Structure'),
            e('p', {}, 'Navigate through the product structure and find relevant products'),
            e('br'),
            selects,
            e(structureTableTwoColumns, { data: this.state.resultData })
        )
    }
}
//Update the DB
class MainDivBodyUpdate extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){CT.startRangeDetector()};
    componentWillUnmount(){CT.stopRangeDetector()};
    render() {
        return e(
            'div', { id: "main-div-body" },
            e('h1', {}, 'Update the knowledge base'),
            e('p', {}, 'Select the formatted range and press upload when the range detected'),
            e('p', {}, 'Formattted range has known headers in the top row'),
            e('div',{id:"update-div"})
        )
    }
}
//Stateless containers
function structureTableTwoColumns(props) {
    //https://medium.com/@vembarrajan/html-css-tricks-scroll-able-table-body-tbody-d23182ae0fbc
    let rows = [], i = 0, objKeys = Object.keys(props.data);
    //error container is return when something wrong with the props
    let errorContainer = e('div', {},
        e('h3', {}, "Result table"),
        e('p', {}, 'No table returned')
    )
    if (props.data[ITEMNUMBER].length !== props.data[DESCRCODE].length) { return errorContainer }

    props.data[ITEMNUMBER].map((el) => {
        rows.push(e('tr', { key: i },
            e('td', { key: el, className: 'structure_table_col1' }, el),
            e('td', { key: props.data[DESCRCODE][i], className: 'structure_table_col2' }, props.data[DESCRCODE][i])
        )
        )
        i++;
    })
    return e('div', {},
        e('h3', {}, `Result table. ${props.data[ITEMNUMBER].length} products`),
        e('div', {},
            e('table', { className: 'structure_table' },
                e('thead', {},
                    e('tr', {},
                        e('th', { className: 'structure_table_col1' }, ITEMNUMBER),
                        e('th', { className: 'structure_table_col2' }, DESCRCODE),
                    )
                ),
                e('tbody', {}, rows)
            )
        )
    )
}
//Knowledge base stateless functional container - renders only based on what was passed
//accepts following props;
function KnowledgeBase(props) {
    let rows = [];
    if(props.founded === undefined || props.founded === null){ return e('h3',{},"Nothing")}
    for (let key in props.founded) {
        rows.push(
            e('tr', { key: key },
                e('td', { className: 'detector_table_col1' }, key),
                e('td', { className: 'detector_table_col2' }, props.founded[key]),
            )
        )
    }
    return e(
        'div', { id: "knowledge-base" },
        e('h3', {}, "Result table"),
        e('table', { className: 'detector_table' },
            e('tbody', {},
                rows
            )
        )
    )
}
function KnowledgeBaseNotDetected(props) {
    return e(
        'div', { id: "knowledge-base" },
        e('h4', {}, 'Nothing detected')
    )
}

function rangeNotDetected(props) {
    return e(
        'div', { id: "range-not-detected" },
        e('h4', {}, 'Range not detected'),
        e('p',{},props.info)
    )
}
function rangeDetected(array2D) {
    return e(
        'div', { id: "range-detected" },
        e('h4', {}, 'Range Detected'),
        e('button',{className:'update-kb-button', onClick: updateKnowledgeBase},'Save to Knowledge Base')
    )
}