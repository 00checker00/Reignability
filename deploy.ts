import { NodeSSH } from "node-ssh";
import * as os from "os";

async function deploy(): Promise<void> 
{
    const ssh = new NodeSSH();
    console.log("start");
    await ssh.connect({
        host: "aegir.uberspace.de",
        username: "broken",
        privateKey: os.homedir()+"/.ssh/id_ed25519"
    }
    )
    console.log("connected");

    await ssh.putDirectory(
        "dist", "/var/www/virtual/broken/reignability.krapp-art.de"
    )

    console.log("done");
    process.exit(0);
}

deploy();