import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function useFileTree() {
  const [filesTree, setFilesTree] = useState<any>({});
  const [isLoadingFiles, setIsLoadingFiles] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/api");
      const { data } = await response.json();

      setFilesTree(data);
      setIsLoadingFiles(false);

      /**
       * Listen for CHANGED event.
       * This event get's emmited when a file(s) in the sepcified directories change
       */
      const socket = io("ws://localhost:3001");
      socket.on("CHANGED", (data) => {
        /**
         * The payload only contains the reclculated tree for the directory where change occured.
         * Make sure to spread on the previous state
         */
        setFilesTree((prev: any) => {
          return { ...prev, ...data.payload };
        });
      });
    })();
  }, []);

  return { filesTree, isLoadingFiles };
}

export default useFileTree;
