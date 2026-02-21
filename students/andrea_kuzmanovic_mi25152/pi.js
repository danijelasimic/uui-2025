const digitsText =
`3.141592653589793238462643383279502884
197169399375105820974944592307816406286
208998628034825342117067982148086513282
306647093844609550582231725359408128481
117450284102701938521105559644622948954
930381964428810975665933446128475648233
786783165271201909145648566923460348610
454326648213393607260249141273724587006
606315588174881520920962829254091715364
367892590360011330530548820466521384...`;

const container = document.getElementById("digits");

const speed = 40;
const pause = 1500;

function startAnimation() {
    container.innerHTML = "";
    let index = 0;

    function step() {
        if (index >= digitsText.length) {
            setTimeout(startAnimation,pause);
            return;
        }

        const ch = digitsText[index];

        if (ch === "\n") {
            container.appendChild(document.createElement("br"));
        }
        else {
        const span = document.createElement("span");
        span.textContent = ch;
        container.appendChild(span);
        }

        index++;
        setTimeout(step, speed);
    }

    step();
}

startAnimation();