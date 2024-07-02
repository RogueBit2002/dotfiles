import Gtk from "types/@girs/gtk-3.0/gtk-3.0";


const createBar : (monitor : number) => Gtk.Window = (monitor : number) => Widget.Window({
    monitor: monitor,
    name: `bar${monitor}`,
    className: "topbarthing",
    anchor: ['top', 'left', 'right'],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
        center_widget: Widget.Label({
            hpack: 'center',
            label: 'Welcome to AGS!',
        })
    })
});




export default createBar;