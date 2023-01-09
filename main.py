
import frmWrk.website as frmWrk
import sys

frmWrk.log_file = sys.stdout
webServer = frmWrk.WebServer( "127.0.0.1", 8080, "./assets" )
webServer.start( )



