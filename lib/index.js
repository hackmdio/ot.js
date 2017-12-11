exports.version = '0.0.17';

exports.TextOperation        = require('./text-operation');
exports.SimpleTextOperation  = require('./simple-text-operation');
exports.Client               = require('./client');
exports.Server               = require('./server');
exports.Selection            = require('./selection');
exports.EditorSocketIOServer = require('./editor-socketio-server');

if (typeof window !== 'undefined') {
  exports.SocketIOAdapter    = require('./socketio-adapter');
  exports.EditorClient       = require('./editor-client');
  exports.CodeMirrorAdapter  = require('./codemirror-adapter');
}

// app.use("/ot", express.static(ot.scriptsDir))
exports.scriptsDir           = require("path").resolve(__dirname, "../") + "/dist";
