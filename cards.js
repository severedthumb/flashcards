let cards = [
    // 1.1
    ['acronym: FHS', 'Filesystem Hierarchy Standard'],
    ['a directory that contains files required to boot the system', '/boot'],
    ['a pseudo-filesystem that contains process and hardware information', '/proc'],
    ['a directory that provides device, driver, and some kernel information', '/sys'],
    ['a directory that contains files that vary in size (e.g., log files, e-mail files, and printing files)', '/var'],
    ['a directory that contains shareable, read-only UNIX system resources', '/usr'],
    ['a directory that contains library files, also known as shared objects', '/lib'],
    ['a directory that contains device driver files for hardware devices', '/dev'],
    ['a directory that contains global configuration files', '/etc'],
    ['a directory intended for installation of third-party applications', '/opt'],
    ['a directory that contains user commands, and may be linked to /usr/bin', '/bin'],
    ['a directory that contains system binaries used by root for booting or repairing the kernel; may be linked to /usr/sbin', '/sbin'],
    ['a directory that contains home directories for user accounts', '/home'],
    ['a directory that serves as a mount point for removable media, such as DVD and USB drives', '/media'],
    ['a directory that serves as a mount point for temporarily mounted filesystems', '/mnt'],
    ['the root user\'s home directory', '/root'],
    ['a directory for temporary files', '/tmp'],
    ['acronym: BIOS', 'Basic Input/Output System'],
    ['acronym: UEFI', 'Unified Extensible Firmware Interface'],
    ['a command which creates an initial RAM disk image (initrd.img) used by the kernel for preloading block device modules which are needed to access the root filesystem', 'mkinitrd'],
    ['a command which reinstalls GRUB2 on the boot sector of a disk specified when the command is run, usually in /boot/grub2', 'grub2-install'],
    ['a command which must be run after making changes to GRUB2 configuration files', 'grub2-mkconfig'],
    ['a command which updates the grub.cfg file (and is an alias of update-grub2)', 'grub2-update'],
    ['a tool used by mkinitrd to generate initial RAM disk files', 'dracut'],
    ['the filename(s) of the Linux kernel (uncompressed/compressed)', 'vmlinux/vmlinuz'],
    ['acronym: GRUB', 'GRand Unified Bootloader'],
    ['acronym: PXE', 'Preboot eXecution Environment'],
    ['acronym: MBR', 'Master Boot Record'],
    ['acronym: GPT', 'GUID Partition Table'],
    ['acronym: FUSE', 'Filesystem in Userspace'],
    ['acronym: RAID', 'Redundant Array of Inexpensive (or Independent) Disks'],
    ['a RAID concept used by RAID 0', 'striping'],
    ['a RAID concept used by RAID 1', 'mirroring'],
    ['a RAID concept used by RAID 5', 'parity'],
    ['a command which displays information about the system\'s PCI buses and devices connected to them', 'lspci'],
    ['a command which displays information about the system\'s USB buses and devices connected to them', 'lsusb'],
    ['a command-line utility which displays detailed system hardware information', 'dmidecode'],
    ['the first of three package compliation/installation commands; sets things up', './configure'],
    ['the second of three package compilation/installation commands; makes the package', 'make'],
    ['the third of three package compilation/installation commands; installs the package', 'make install'],

    // 1.2
    ['a stream editor for filtering and transforming text', 'sed'],
    ['a pattern-scanning and -processing language', 'awk'],
    ['a command-line tool for formatting and printing data', 'printf'],
    ['a small, free text editor intended to replace pico', 'nano'],
    ['a common text editor and its "improved" version', 'vi(m)'],
    ['the tar command uses the -z option for this compression tool', 'gzip'],
    ['the tar command uses the -j option for this compression tool', 'bzip2'],
    ['the tar command uses the -J option for this compression tool', 'xz'],
    ['a compression and archiving tool commonly used by Windows systems', 'zip'],
    ['a commonly used archiving tool; compression tools can be used with options such as -z', 'tar'],
    ['a command-line tool for copying files to and from archives', 'cpio'],
    ['a command-line tool for copying and converting files; often used to duplicate disks', 'dd'],
    ['a command which displays the status of a file or filesystem', 'stat'],
    ['a command which displays the file type of a file', 'file'],
    ['a remote file-copying tool which can detect differences between sources files and destination files, and copy only the differences', 'rsync'],
    ['a secure remote file-copying tool; uses SSH', 'scp'],
    ['a command to move (or rename) a file', 'mv'],
    ['a command to copy a file', 'cp'],
    ['a command to make a directory', 'mkdir'],
    ['a command to remove a directory', 'rmdir'],
    ['a command to list the contents of a directory', 'ls'],
    ['a command to print the working directory', 'pwd'],
    ['a command to remove a file (or directory, recursively with the -r flag)', 'rm'],
    ['a command to change directories', 'cd'],
    ['a command to list directories, subdirectories, and files in a tree-like diagram', 'tree'],
    ['a command to concatenate the contents of files; often used to display the contents of a text file', 'cat'],
    ['a command to update the access and modification times of a file; often used to create a new file', 'touch'],

    // 1.3
    ['a command-line tool for creating and configuring disk partitions, for use with MBR', 'fdisk'],
    ['a command-line tool for creating and configuring disk partitions, for use with GPT ', 'gdisk'],
    ['the disk partition editor that isn\'t fdisk or gdisk', 'parted'],
    ['a command to inform the kernel of changes to a partition table', 'partprobe'],
    ['a configuration file for a mount point contolled by systemd', 'systemd.mount'],
    ['a configuration file/table for mounting and unmounting filesystems (full path)', '/etc/fstab'],
    ['a command to mount a filesystem', 'mount'],
    ['a command to unmount a filesystem', 'umount'],
    ['acronym: LUKS', 'Linux Unified Key Setup'],
    ['What is the default filesystem on SUSE systems?', 'btrfs'],
    ['acronym: btrfs', 'B-TRee File System'],
    ['a journaling filesystem ported to Linux from the IRIX operating system', 'xfs'],
    ['What is currently the default filesystem for most (but not all) Linux distributions?', 'ext4'],
    ['a command to display how much disk space is available on a filesystem', 'df'],
    ['a command to display how much disk space is used by a file', 'du'],
    ['a command to display information about physical volumes', 'pvs'],
    ['a command to display information about volume groups', 'vgs'],
    ['a command to display information about logical volumes', 'lvs'],
    ['a command to initialize a physical volume so it can be used in a volume group', 'pvcreate'],
    ['a command to create a volume group', 'vgcreate'],
    ['a command to add physical volumes to a volume group', 'vgextend'],
    ['a command to create a logical volume', 'lvcreate'],
    ['a command to make changes to a logical volume', 'lvchange'],
    ['a command to resize a logical volume', 'lvresize'],
    ['a command-line tool for managing RAID arrays', 'mdadm'],
    ['a special file that displays the state of the Linux kernel\'s md (multiple device) driver (for RAID arrays)', '/proc/mdstat'],
    ['a daemon which checks for failed paths', 'multipathd'],
    ['acronym: NFS', 'Network FileSystem'],
    ['acronym: SMB', 'Server Message Block'],
    ['a command to display information about the system\'s SCSI devices', 'lsscsi'],
    ['a command to display information about the system\'s block devices', 'lsblk'],
    ['a command to display attributes of a block device', 'blkid'],
    ['a command to display FibreChannel statistics', 'fcstat'],

    // 1.4
    ['List the eight common systemctl commands you need to know for the exam.', 'status, start, restart, stop, enable, disable, mask, unmask'],
    ['a command-line tool for scheduling recurring jobs', 'cron'],
    ['a file that keeps track of cron jobs', 'crontab'],
    ['a command-line tool for scheduling one-time jobs', 'at'],
    ['kill signal 15; the default kill signal', 'SIGTERM'],
    ['kill signal 9; immediately kills a process', 'SIGKILL'],
    ['kill signal 1; often used to reload configuration of a service/daemon', 'SIGHUP'],
    ['a command to provide a real-time view of running processes and resource usage', 'top'],
    ['a newer, fancier version of the "top" tool', 'htop'],
    ['a command to display a snapshot of running processes', 'ps'],
    ['a command to display a list of open files', 'lsof'],
    ['a tool (two commands) for modifying the priority of a running process', 'nice/renice'],
    ['the range of "niceness" is from X (most favorable scheduling) to Y (least favorable)', '-20, 19'],
    ['List the four possible states a process can be in.', 'running, sleeping, stopped, zombie'],
    ['a key combination which sends a SIGINT kill signal to the program', 'Ctrl+C'],
    ['a key combination which sends a SIGSTP kill signal to the program', 'Ctrl+Z'],
    ['a key combination which ends a bash session', 'Ctrl+D'],
    ['a command that\'s like grep but looks through running processes', 'pgrep'],
    ['a command like pgrep, but sends a specified kill signal to the process it finds', 'pkill'],
    ['a command which finds and displays the process ID (PID) of a process', 'pidof'],
    
    // 1.5
    ['a collection of utilities for managing TCP/IP networking in Linux', 'iproute2'],
    ['an iproute2 command to display IP information, and which replaces several net-tools commands', 'ip'],
    ['an iproute2 command to display socket statistics, and which replaces netstat', 'ss'],
    ['a command to work with NetworkManager on a CLI, rather than a GUI', 'nmcli'],
    ['a net-tools command to configure network interfaces', 'ifconfig'],
    ['a prefix for network interface configuration files stored in /etc/sysconfig/network-scripts', 'ifcfg-'],
    ['a command to display or (temporarily) change the hostname of a system', 'hostname'],
    ['a command to display the system\'s ARP cache', 'arp'],
    ['a command to display or edit IP routes', 'route'],
    ['a directory which contains network interface configuration files (full path)', '/etc/sysconfig/network-scripts'],
    ['a configuration file which tells the system where to obtain name-service information', 'nsswitch'],
    ['a name resolution configuration file (full path)', '/etc/resolv.conf'],
    ['a systemd command to display and/or change the hostname of a system', 'hostnamectl'],
    ['a command to (among other things) resolve domain names; uses systemd-resolved.service', 'resolvectl'],
    ['a DNS lookup utility (kind of replaced by resolvectl)', 'dig'],
    ['a command to query name servers (kind of replaced by resolvectl', 'nslookup'],
    ['a command to perform DNS lookups (not dig or nslookup)', 'host'],
    ['a command to display information about the owner of a domain/website', 'whois'],
    ['a command to display a description of the contents of packets on a network interface', 'tcpdump'],
    ['a tool to capture and analyze packets on a network (GUI and terminal versions)', 'WireShark/tshark'],
    ['a command to display various network statistics, such as open connections', 'netstat'],
    ['a command to trace the route of a packet', 'traceroute'],
    ['a command which uses ICMP to test the connection to a destination', 'ping'],
    ['a command which is like traceroute but better, and can use TCP/UDP instead of ICMP', 'mtr'],
    ['a command-line tool to transfer data to/from a server using a protocol such as HTTP(S) or FTP', 'curl'],
    ['a command-line tool to download files from the web', 'wget'],
    ['a command to establish a temporary TCP connection; sometimes used to transfer files over a network', 'nc (netcat)'],
    ['port used by SFTP', 'TCP/22 (SSH)'],

    // 1.6
    ['a low-level package manager for Debian packages (.deb); does NOT install dependencies', 'dpkg'],
    ['a high-level package manager for Debian packages (.deb); DOES install dependencies', 'apt'],
    ['a package manager used by SUSE systems', 'ZYpp'],
    ['the command-line tool used for ZYpp packages', 'zypper'],
    ['the daemon for the Snap package management system', 'snapd'],
    ['a utility for running apps in a sandboxed environment', 'Flatpak'],
    ['a format for distributing "portable" software, i.e., apps independent from distribution', 'AppImage'],
    ['the file type of Red Hat packages and the two package managers used with them', '.rpm, yum, dnf'],

    // 1.7
    ['a tool to configure kernel parameters at runtime', 'sysctl'],
    ['a command to list kernel modules and their status', 'lsmod'],
    ['a command to insert a kernel module (i.e., to use that module)', 'insmod'],
    ['a command to remove a kernel module (i.e., to stop using that module)', 'rmmod'],
    ['a tool to insert and/or remove kernel modules', 'modprobe'],
    ['a command to display information about a kernel module', 'modinfo'],
    ['a program for maintaining the accuracy of the system clock (uses NTP)', 'chrony'],
    ['a command/tool for managing system time, date, timezone, etc.', 'timedatectl'],

    // 2.1
    ['acronym: PKI', 'Public Key Infrastructure'],
    ['acronym: PAM', 'Pluggable Authentication Module'],
    ['ports used by LDAP and LDAPS', 'TCP 389 and 636'],
    ['a tool to set the default permission for newly created files and directories', 'umask'],
    ['the default umask', '022'],
    ['permissions (in numbers) of a file WITHOUT umask', '666'],
    ['permissions (in numbers) of a file WITH the default umask', '644'],
    ['permissions (in numbers) of a directory WITHOUT umask', '777'],
    ['permissions (in numbers) of a directory WITH the default umask', '755'],

    // 2.2
    ['a command to add a user', 'useradd'],
    ['a command to add a group', 'groupadd'],
    ['a command to delete a user', 'userdel'],
    ['a command to delete a group', 'groupdel'],
    ['a command to modify a user', 'usermod'],
    ['a command to modify a group', 'groupmod'],
    ['a command to display user and group information for a specified user (or the current user by default)', 'id'],
    ['a command to display who is logged onto the system', 'who'],
    ['a command to display who is logged on AND what they are doing (their processes)', 'w'],
    ['the file where basic user information is stored (full path)', '/etc/passwd'],
    ['the file where hashed user passwords are stored (full path)', '/etc/shadow'],
    ['the file where basic group information is stored (full path)', '/etc/group'],
    ['the file where a template for new user creation is stored', '/etc/skel'],
    ['a command to change a user password', 'passwd'],
    ['a command to change user password expiration settings', 'chage'],
    ['a pluggable authentication module for tallying user logins', 'pam_tally2'],
    ['a tool to display and modify user authentication failure log files', 'faillock'],
    ['a file which is the systemwide profile (i.e., for all users) for bash (full path)', '/etc/profile'],
    ['a file which contains settings for a user\'s LOGIN bash shell', '.bash_profile'],
    ['a file which contains settings for a user\'s NON-LOGIN bash shell', '.bashrc'],
    ['a configuration file for the login package (contains definitions)', '/etc/login.defs'],

    // 2.3
    ['the ufw command to allow a port', 'sudo ufw allow [port number, or protocol]'],
    ['the ufw command to deny a port', 'sudo ufw deny [port number, or protocol]'],
    ['the firewalld command to allow a port', 'sudo firewall-cmd --add-port=[number]/[tcp or udp]'],
    ['the firewalld command to deny a port', 'sudo firewall-cmd --remove-port=[number]/[tcp or udp]'],
    ['a firewalld command to view currently allowed/denied ports and protocols', 'firewall-cmd --list-all'],
    ['the configuration file where you can enable or disable IPv4 forwarding (full path)', '/etc/sysctl.conf'],
    ['the older tool for allowing/blocking network traffic', 'iptables'],
    ['the newer tool for allowing/blocking network traffic', 'nftables'],

    // 2.4
    ['a command to execute a command as another user, usually the superuser', 'sudo'],
    ['a command to switch users', 'su'],
    ['the file where users with sudo privileges are configured (full path)', '/etc/sudoers'],
    ['a command to safely edit the /etc/sudoers file', 'visudo'],
    ['a file containing SSH client configuration (full path)', '/etc/ssh/ssh_config'],
    ['a file containing SSH server configuration (full path)', '/etc/ssh/sshd_config'],
    ['a directory where an SSH server stores clients\' public keys', '~/.ssh/authorized_keys'],
    ['a command to copy an SSH client\'s public key to an SSH server\'s authorized_keys', 'ssh-copy-id'],
    ['a directory where an SSH client stores servers\' public keys', '~/.ssh/known_hosts'],
    ['a command to add keys to the SSH authentication agent', 'ssh-add'],

    // 2.5          NOTE: THERE IS MORE SELINUX STUFF YOU NEED TO MEMORIZE!
    ['a command to change the owner of a file', 'chown'],
    ['a command to change the group ownership of a file or directory', 'chgrp'],
    ['a command to change the permissions of a file or directory (i.e., the rwx bits)', 'chmod'],
    ['a command to get a file\'s access control list', 'getfacl'],
    ['a command to set a file\'s access control list', 'setfacl'],
    ['a command to list the attributes of a file', 'lsattr'],
    ['a command to change the attributes of a file', 'chattr'],
    ['the two access control tools you need to be familiar with for the exam', 'SELinux, AppArmor'],
    ['the three states (settings) for SELinux policies', 'enforcing, permissive, disabled'],
    ['a command to set the state of an SELinux policy to enforcing or permissive', 'setenforce'],
    ['a command to display the state of an SELinux policy', 'getenforce'],

    // 3.1
    ['in bash, the character to include at the end of a command to run it in the background', '&'],
    ['in bash, the character to execute one command only when the previous one succeeds', '&&'],
    ['in bash, the character to stdout from one command as stdin for another', '|'],
    ['in bash, the character to execute one command only when the previous one fails', '||'],
    ['in bash, the character to redirect stout (short for 1>)', '>'],
    ['in bash, the character to append stdout to a file', '>>'],
    ['in bash, the character to redirect stdin', '<'],
    ['in bash, the character to redirect multiple lines of input', '<<'],
    ['a command to read from standard input and write to standard output', 'tee'],
    ['a command to print the word count of a file', 'wc'],
    ['the variable where a user\'s path is stored', '$PATH'],
    ['the variable where a user\'s default shell is stored', '$SHELL'],
    ['the variable which holds the exit code of the most recently executed command', '$?'],

    // 3.2
    ['the two container platforms you need to know for the Linux+ exam', 'Docker and Podman'],
    ['a Docker/Podman command to start a container', 'start'],
    ['a Docker/Podman command to stop a container', 'stop'],
    ['a Docker/Podman command to inspect a running container', 'inspect'],
    ['a Docker/Podman command to build a container image from instructions', 'build'],
    ['a Docker/Podman command to push a container image to a specified location (such as an image registry)', 'push'],
    ['a Docker/Podman command to pull a container from an image registry', 'pull'],
    ['a Docker/Podman command to list local images', 'images'],
    ['a Docker/Podman command to remove a container image', 'rmi'],
    ['a Docker command to create an run a container from an image (full command)', 'docker run --name <container_name> <image_name>'],

    // 3.3
    ['the git command to retrieve an entire repository from a location via URL', 'git clone [url]'],
    ['the git command to send local branch commits to the remote repository branch', 'git push [alias] [branch]'],
    ['the git command to fetch and merge any commits from the remote branch', 'git pull'],
    ['the git command to commit your staged content as a new commit', 'git commit -m "[message]"'],
    ['the git command to stage a file, i.e. add it your next commit', 'git add [file]'],
    ['the git command to switch to another branch and check it out into your working directory', 'git checkout'],
    ['the git command to list your branches', 'git branch'],
    ['the git command to create a new branch', 'git branch [branch-name]'],
    ['in git, what it\'s called when you mark a specific point in a repository\'s history as important', 'tagging'],
    ['in git, the file where you tell git which files and/or directories to ignore', '.gitignore'],
    ['the VCS (Version Control System) you need to know for the exam', 'git'],

    // 3.4
    ['acronym: YAML', 'YAML Ain\'t Markup Language'],
    ['acronym: JSON', 'JavaScript Object Notation'],
    ['an agentless automation tool that uses YAML playbooks to manage configuration, deployment, and orchestration over SSH', 'Ansible'],
    ['a declarative, model-driven configuration management tool that uses a master-agent setup to enforce desired system states', 'Puppet'],
    ['a configuration management tool that uses Ruby-based recipes and a client-server model to automate infrastructure tasks', 'Chef'],
    ['an infrastructure-as-code tool that uses a declarative language (HCL) to provision and manage cloud and on-prem resources', 'Terraform'],
    ['a fast, event-driven automation tool that supports both configuration management and remote execution using a master-minion architecture or agentless mode', 'SaltStack'],
    ['acronym: CI/CD', 'Continuous Integration/Continuous Deployment'],
    ['the git command to merge the specified branch into the current one', 'git merge [branch]'],
    ['the git command to apply any commits of current branch ahead of specified one', 'git rebase [branch]'],

    // 3.5          NOTE: THERE IS NOT MUCH TO THIS OBJECTIVE, BUT LEARN MORE ABOUT KUBERNETES
    ['in Kubernetes, a collection of one or more containers that share resources (such as storage)', 'pod'],
    ['in Kubernetes, a container that runs alongside the main application container, within the same pod', 'sidecar'],
    ['in Kubernetes, a type of sidecar that acts as a proxy for the main application container', 'ambassador container'],
    ['acronym: NAT', 'Network Address Translation'],
    ['a provisioning tool that runs when a new VM is booted for the first time', 'cloud-init'],
    ['a platform for automating the deployment and management of containerized applications', 'Kubernetes'],

    // 4.1          NOTE: THE OBJECTIVES IN SECTION 4 WILL NOT HAVE MANY FLASHCARDS, BUT THERE ARE STILL CONCEPTS TO REVIEW
    ['acronym: IOPS', 'Input/output Operations Per Second'],
    ['a data structure that holds metadata about a file or directory', 'inode (index node)'],
    ['acronym: NVMe', 'Non-Volatile Memory Express'],

    // MISC
    ['Which runlevel means system halt, i.e., the system can be safely powered off?', '0'],
    ['Which runlevel means single-user mode?', '1'],
    ['Which runlevel means multi-user mode with the CLI (not the GUI)?', '3'],
    ['Which runlevel means multi-user mode with the GUI (not the CLI)?', '5'],
    ['Which runlevel means reboot/restart the system?', '6']
]