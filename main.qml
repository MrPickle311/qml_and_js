import QtQml 2.12
import QtQuick 2.12
import QtQuick.Window 2.15
import QtQuick.Controls 2.12
import "myScript.js" as MyScript

Window
{
    Window
    {
        id : s

    }
    ListModel
    {
        ListElement
        {
            //var string
            //var integer
            //var date

        }
    }

    id : w
    width: 640
    height: 480
    visible: true
    title: qsTr("Hello World")
    property var lst : []
    property var x_pos: 0
    property var y_pos: 100
    component SuperRectangle : Rectangle
    {
        x: 200
        y: 200
        width: 100
        height: 100
        color: "brown"
        visible: true
    }

    Rectangle
    {
        id : constructor
        x: 0
        y: 0
        width: 100
        height: 100
        color: "red"
        property var x_pos: 0
        MouseArea
        {
            id : cm_area
            anchors.fill: parent
            onClicked:
            {
                lst.push(MyScript.createSpriteNow(parent.x_pos,w.y_pos,"yellow"));
                console.log("pushed!");
                var x = parent.x_pos
                parent.x_pos = Qt.binding(function (){return x + 100})
                console.log(lst.length)
            }

        }
    }
    Rectangle
    {
        id : destructor
        x: 100
        y: 0
        width: 100
        height: 100
        color: "blue"
        MouseArea
        {
            id : dm_area
            anchors.fill: parent
            onClicked:
            {
                lst[lst.length - 1].destroy()
                lst.pop()
                console.log(lst.length)
            }
        }
    }
    Timer
    {
        id : timer
        interval: 1000
        repeat: true
        running: true
        onTriggered: time.text =  Date().toString()
    }
    ModelSprite
    {
        width: 60
        height: 100
        x: 300
        y: 300
    }

    Text
    {
        color: "black"
        visible: true
        x: 400
        y: 400
        width: 124
        height: 18
        id: time
        text: "No date"
    }
}
