#pragma strict

private var speed = 1.0;

function OnGUI() {
    speed = GUI.HorizontalSlider(Rect(10, 10, 200, 32), speed, 0.0, 1.0);
    Time.timeScale = speed;
}
