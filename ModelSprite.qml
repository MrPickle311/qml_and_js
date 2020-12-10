import QtQml.Models 2.12
import QtQuick 2.12

Item
{
    ListModel
    {
        id : model
        ListElement
        {
            name : "Option 1"
        }
        ListElement
        {
            name : "Option 2"
        }
        ListElement
        {
            name : "Option 3"
        }
    }

    Component
    {
        id : delegate
        Text {
            id: textn
            text: name
        }
    }

    ListView
    {
        anchors.fill: parent
        clip: true
        id : view
        model: model
        delegate: delegate
        header: headercomponent
        footer:
            Rectangle
            {
                width: parent.width
                color: "lightgray"
            }
        highlight:
            Rectangle
            {
                width: parent.width
                color: "lightgray"
            }
    }

    Component
    {
        id : headercomponent
        Rectangle
        {
            id : component
            width: parent.width
            height: 30
            gradient: colors
            //border: {color: "#9EDDF2"; width: 2}
            Text
            {
                anchors.centerIn: parent
                text: "Options"
                font.pixelSize: 15
            }
        }
    }

    Gradient
    {
        id : colors
        GradientStop { position: 0.0; color: "#8EE2FE"}
        GradientStop { position: 0.66; color: "#7ED2EE"}
    }
}

/*##^##
Designer {
    D{i:0;autoSize:true;height:480;width:640}
}
##^##*/
