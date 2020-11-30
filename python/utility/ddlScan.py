import argparse
import sys, socket, select, os
from os import path

def parser():
  parser = argparse.ArgumentParser()
  parser.add_argument('--file', help="nome file DDL")
  return parser.parse_args()


if __name__ == "__main__":
  args=parser()
  output = ''
  block_size=10
  s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  ## file name
  if args.file is None:
    print('### Digita il nome del file DDL:')
    if sys.platform == 'win32':
        # Get the list sockets which are readable, time-out after 1 s
        read_sockets = select.select([s], [], [], 10)[0]
        import msvcrt
        if msvcrt.kbhit():
            read_sockets.append(sys.stdin)
    else:
    # this does NOT work on windows... and it may not work on other systems... in that case, put more things to use the original code above
        inputready,outputready,exceptready = select.select([sys.stdin],[],[])
    for i in inputready:
        if i == fd:
            output += os.read(fd, block_size)
    # i, o, e = select.select( [sys.stdin], [], [])
    if (i):
      file_name=int(sys.stdin.readline().strip())
  else:
    file_name= args.file

  if path.isfile("guru99.txt"):
    print('hello')
