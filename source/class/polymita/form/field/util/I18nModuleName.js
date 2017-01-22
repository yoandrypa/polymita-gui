qx.Class.define("polymita.form.field.util.I18nModuleName", {
    extend: polymita.form.field.TextField,

    statics: {
        cellRendererType: polymita.table.cellrenderer.I18nModuleName,

        properties: {
            required: {
                type: polymita.form.field.boolean.CheckBox,
                settings: { value: false }
            },
            gridColumnWidth: {
                type: polymita.form.field.grid.ColumnWidth,
                settings: {}
            },
            gridRendererStyle: {
                type: polymita.form.field.grid.RendererStyle,
                settings: { required: true, value: '{}' }
            }
        }
    }
});