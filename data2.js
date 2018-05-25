define(["knockout"], function (ko) {
    var selectedData = ko.observableArray([]);
    var selectedApartmentData = ko.observableArray([]).extend({ notify: 'always' });

       var apartmentData = ko.observableArray([
        {
            text: "Apartment 1",
            id: 1,
            color: "#1e90ff",
            BuildingId: 1
        }, {
            text: "Apartment 2",
            id: 2,
            color: "#ff9747",
            BuildingId: 2
        },
        {
            text: "Apartment 3",
            id: 3,
            color: "#ff9747",
            BuildingId: 1
        }]);

    //selectedApartmentData(apartmentData());

    var bedData = ko.observableArray([
        {
            text: "Bed 1",
            id: 1,
            color: "#1e90ff"
        }, {
            text: "Bed 2",
            id: 2,
            color: "#ff9747"
        }]);


    var Building = function (Id, name) {
        this.buildingId = Id;
        this.buildingName = name;

    };
    var buildingData = ko.observableArray([
        new Building(1, "Building 1"),
        new Building(2, "Building 2"),
        new Building(3, "Building 3")
    ]);

    var resources = ko.computed(function () {
        return [
            {
                fieldExpr: "Apartment",
                allowMultiple: false,
                dataSource: selectedApartmentData(),
                label: "Apartment"
            },
            {
                fieldExpr: "Bed",
                allowMultiple: false,
                dataSource: bedData(),
                label: "Bed"
            }
        ];
    });

    var data = ko.observable([
        {
            "text": "John 1",
            "ownerId": [1],
            "startDate": new Date(2017, 4, 1),
            "endDate": new Date(2017, 4, 1),
            "Apartment": 1,
            "BuildingId": 1,
            "Bed": 1,
            "flore": 1,
            "allDay": true
        }, {
            "text": "John 2",
            "ownerId": [2],
            "startDate": new Date(2017, 4, 1, 11, 30),
            "endDate": new Date(2017, 4, 1, 14, 15),
            "Apartment": 2,
            "BuildingId": 2,
            "Bed": 2,
            "flore": 2
        }, {
            "text": "John 3",
            "ownerId": [3],
            "startDate": new Date(2017, 4, 1, 13, 15),
            "endDate": new Date(2017, 4, 1, 16, 15),
            "Apartment": 3,
            "BuildingId": 1,
            "Bed": 2,
            "flore": 1
        }]);


    return {       
        resources: resources,
        apartmentData: apartmentData,
        selectedApartmentData: selectedApartmentData,
        bedData: bedData,
        buildingData: buildingData,
        selectedData: selectedData,
        data: data
    }
})