window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        return false;
    }
}, true);
}

window.Script2 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(false);  // Set volume to false (mute)

}

window.Script3 = function()
{
  // Use the global DS object if it exists, otherwise try require:
var appState = window.DS ? DS.appState : require("helpers/appState");
appState.setVolume(true);  // Set volume to true (unmute)

}

};
