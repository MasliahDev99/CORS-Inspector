from libs.cors_inspector import CORSinspector


if __name__ == "__main__":
    cors_inspector = CORSinspector()
    result = cors_inspector.run(url="https://vercel.com/",origin="http://127.0.0.1:8000")
    print(result)