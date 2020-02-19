import pandas as pd
import pyarrow.parquet as pq
import glob

def dataframe(path, cols):
	paths = glob.glob(path)
	dataset = pq.ParquetDataset(paths)
	table = dataset.read()
	df = table.to_pandas()
	df = df[cols]
	return df