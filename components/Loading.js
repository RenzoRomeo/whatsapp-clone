import Image from "next/image";
import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
        >
            <div>
                <Image
                    src="/images/logo.png"
                    alt="loading"
                    height={200}
                    width={200}
                    style={{ marginBottom: 10 }}
                />
                <Circle color="#3CBC28" size={60} />
            </div>
        </center>
    );
}

export default Loading;
