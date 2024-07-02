const main = '/tmp/ags/main.js';


try {
    //const a = await Utils.execAsync(["whoami"]);
    //const b = await Utils.execAsync(['getent', 'passwd'  , a]);
    //const home = b.split(":")[5];

    await Utils.execAsync([
        'bun', 'build', `${App.configDir}/main.ts` /*`${home}/.dotfiles/ags/main.ts`*/,
        '--outfile', main,
        '--external', 'resource://*',
        '--external', 'gi://*',
        '--external', 'file://*',
    ]);

    await import(`file://${main}`);

} catch (error) {
    console.error(error);
    App.quit();
}

/*
const myLabel = Widget.Label({
    label: 'some example content',
    //css: "background-color: red;"
});

function Center() {
    return Widget.Box({
        spacing: 8,
        children: [
            myLabel
        ],
        css: "background-color: green; min-height:30px;"
    });
}


const myBar = Widget.Window({
    name: 'bar',
    anchor: ['top', 'left', 'right'],
    css: "background-color: rgba(255,255,255,0); min-height:100px;",
    exclusivity: "exclusive",
    child: Widget.CenterBox({
        centerWidget: Center()
    })
});

App.config({ windows: [myBar] });*/