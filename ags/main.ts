import createBar from "widgets/bar/bar"

App.config({
    windows: [createBar(0)],
});

App.applyCss(`${App.configDir}/styleA.css`);

/*
const time = Variable('', {
    poll: [1000, function() {
        return Date().toString();
    }],
});

const Bar = (monitor: number) => Widget.Window({
    monitor,
    name: `bar${monitor}`,
    anchor: ['top', 'left', 'right'],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
        start_widget: Widget.Label({
            hpack: 'center',
            label: 'Welcome to AGS!',
        }),
        end_widget: Widget.Label({
            hpack: 'center',
            //label: time.bind(),
        }),
    }),
});

App.config({
    windows: [Bar(0)],
});*/