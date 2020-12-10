import QtQuick 2.12
import "myScript.js" as MyScript

Rectangle
{
    x : 50
    y : 50
    color: "orange"
    width: 40
    height: 40
    MouseArea
    {
        anchors.fill: parent
        onClicked:
        {
            console.log("im here!")
        }
    }
}

