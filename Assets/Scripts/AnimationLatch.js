#pragma strict

private var rotationHold : Quaternion;

function OnEnable() {
    rotationHold = transform.localRotation;
}

function LateUpdate () {
    transform.localRotation = rotationHold;
}
