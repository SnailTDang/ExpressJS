export function renderTable(data) {
    const renderImg = (params) => {
        const element = document.createElement("div");
        const imageElement = document.createElement("img");
        if (params.value) {
            imageElement.src = params.value;
        } else {
            imageElement.src =
                "https://www.ag-grid.com/example-assets/weather/fire-minus.png";
        }
        element.className = "cell-img";
        element.appendChild(imageElement);
        return element;
    };
    function deselect() {
        gridOptions.api.deselectAll();
    }

    const columnDefs = [
        {
            field: "productID",
            headerName: "No",
            resizable: true,
            width: "auto",
            maxWidth: 100,
        },
        {
            field: "productName",
            headerName: "Name",
            resizable: true,
            suppressSizeToFit: true,
            width: 350,
        },
        {
            field: "productPrice",
            headerName: "Price",
            resizable: true,
            cellRenderer: (params) => {
                return params.value.toLocaleString("VN-vi") + "đ";
            },
        },
        { field: "productAmount", headerName: "Amount", resizable: true },
        {
            field: "discount",
            headerName: "Discount",
            resizable: true,
            cellRenderer: (params) => {
                return params.value + "%";
            },
        },
        {
            field: "productImg",
            headerName: "Picture",
            resizable: false,
            autoHeight: true,
            cellRenderer: renderImg,
        },
    ];
    const gridOptions = {
        resizable: true,
        initialWidth: "30%",
        wrapHeaderText: true,
        autoHeaderHeight: true,
        columnDefs,
        defaultColDef: { sortable: true, filter: true },
        rowSelection: "multiple",
        animateRows: true,
        onCellClicked: (params) => {
            console.log("cell was clicked", params);
        },
    };
    const eGridDiv = document.getElementById("myGrid");
    eGridDiv.style.setProperty("width", "100%");
    new agGrid.Grid(eGridDiv, gridOptions);
    gridOptions.api.setRowData(data);
}
