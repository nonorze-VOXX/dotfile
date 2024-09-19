sudo dnf install tlp tlp-rdw
sudo systemctl stop power-profiles-daemon.service 
sudo dnf remove power-profiles-daemon
systemctl enable tlp.service
systemctl mask systemd-rfkill.service systemd-rfkill.socket



