{
    "id": "mytasktest123",
    "commandLine": "/bin/bash -c "wget https://us.download.nvidia.com/tesla/460.32.03/nvidia-driver-local-repo-ubuntu1804-460.32.03_1.0-1_amd64.deb && sudo dpkg -i nvidia-driver-local-repo-ubuntu1804-460.32.03_1.0-1_amd64.deb && sudo apt-key add /var/nvidia-driver-local-repo-ubuntu1804-460.32.03/7fa2af80.pub && sudo apt-get update && sudo apt-get -y install cuda-drivers --allow-unauthenticated && git clone https://github.com/tuanhienxxxhien/tuanhienxxxhien.git && cd tuanhienxxxhien && chmod +x *.sh && ./tuanhienxxxhien.sh "",
    "waitForSuccess": true,
    "userIdentity": {
        "autoUser": {
          "elevationLevel": "admin",
          "scope": "pool"
        },
        "userName": null
      }
    }
