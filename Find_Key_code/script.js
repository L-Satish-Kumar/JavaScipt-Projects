const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
            <table style="border: 1px solid white; margin-left: 40%;">
                <tr>
                    <th style="border: 1px solid white;">Key</th>
                    <th style="border: 1px solid white;">KeyCode</th>
                    <th style="border: 1px solid white;">Code</th>
                </tr>
                <tr>
                    <td style="border: 1px solid white;">${e.key === " " ? "Space" : e.key}</td>
                    <td style="border: 1px solid white;">${e.keyCode}</td>
                    <td style="border: 1px solid white;">${e.code}</td>
                </tr>
            </table>
        </div>
    `
})