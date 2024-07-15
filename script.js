function submitAnswers() {
    var suspicions = document.getElementsByName("suspicion");
    var actions = document.getElementsByName("action");
    var meetingTimes = document.getElementsByName("meetingTime");

    var suspicionAnswer;
    var actionAnswer;
    var meetingTimeAnswer;

    for (var i = 0; i < suspicions.length; i++) {
        if (suspicions[i].checked) {
            suspicionAnswer = suspicions[i].value;
            break;
        }
    }

    for (var j = 0; j < actions.length; j++) {
        if (actions[j].checked) {
            actionAnswer = actions[j].value;
            break;
        }
    }

    for (var k = 0; k < meetingTimes.length; k++) {
        if (meetingTimes[k].checked) {
            meetingTimeAnswer = meetingTimes[k].value;
            break;
        }
    }

    if (!suspicionAnswer || !actionAnswer || !meetingTimeAnswer) {
        alert("Wybierz odpowiedzi na wszystkie pytania!");
        return;
    }

    var correctSuspicion = "3"; // Podejrzewał, że nadawca jest zamieszany w nielegalne działania
    var correctAction = "2"; // Powiedzieć wszystkim, kim jest adresat
    var correctMeetingTime = "21"; // 21:00

    var resultText = document.getElementById("resultText");

    if (suspicionAnswer === correctSuspicion && actionAnswer === correctAction && meetingTimeAnswer === correctMeetingTime) {
        document.getElementById("actIII").style.display = "block";
    } else {
        resultText.textContent = "Niepoprawne odpowiedzi. Spróbuj ponownie.";
        document.getElementById("result").style.display = "block";
    }
}
