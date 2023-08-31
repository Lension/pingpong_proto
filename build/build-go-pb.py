import os
import re
import shutil

cmd = """
protoc -I pkg/third-party -I pb --go_out=paths=source_relative:. --go-grpc_out=paths=source_relative:. %s
"""


def is_proto(f: str):
    return f.endswith(".proto")


def copy_file(dst_dir, src_dir, name, ext):
    dst = os.path.join(dst_dir, name + ext)
    print("dst path:", dst)
    src = os.path.join(src_dir, name + ext)
    print("src path:", src)
    if os.path.exists(src):
        if not os.path.exists(dst_dir):
            os.makedirs(dst_dir)
        shutil.move(src, dst)


for path, dirs, files in os.walk("./pb"):
    for file in files:
        if not is_proto(file):
            continue
        os.system(cmd % (os.path.join(path, file)))
        content = ""
        with open(os.path.join(path, file), 'r', encoding="utf-8") as f:
            content = f.read()
        result = re.findall(r'option\s+go_package\s*=\s*"(.*?)"', content)

        if len(result) == 0:
            continue
        result1 = str(result[0]).split(';')
        if len(result1) == 0:
            continue
        result2 = result1[0]
        print(result2)

        dirname, basename = os.path.split(file)
        name, ext = os.path.splitext(basename)
        print("路径", path, "文件", file)

        dst = re.findall(r'go_pb/.*', result2)[0]
        if not os.path.exists(dst):
            os.makedirs(dst)
        #src = os.path.join(*re.split(r'/', path)[2:])
        #if not os.path.exists(src):
        #    os.makedirs(src)
        src = os.path.join(".\\")

        copy_file(dst, src, name, ".pb.go")
        copy_file(dst, src, name, "_grpc.pb.go")
        #shutil.rmtree(os.path.split(src)[0])
        print()
