use std::io::MemWriter;
use std::mem;

use Data;

macro_rules! impl_data {
    ($($ty:ty),+) => {$(
        impl Data for $ty {
            fn f64(self) -> f64 {
                self.to_f64().unwrap()
            }
        }

        impl<'a> Data for &'a $ty {
            fn f64(self) -> f64 {
                self.to_f64().unwrap()
            }
        }
    )+}
}

impl_data!(f32, f64, i16, i32, i64, i8, int, u16, u32, u64, u8, uint)

#[deriving(Clone)]
pub struct Matrix {
    bytes: Vec<u8>,
    ncols: uint,
    nrows: uint,
}

impl Matrix {
    pub fn new<A: Row, I: Iterator<A>>(mut rows: I) -> Matrix {
        let ncols = Row::ncols(None::<A>);
        let bytes_per_row = ncols * mem::size_of::<f64>();
        let mut buffer = MemWriter::with_capacity(rows.size_hint().val0() * bytes_per_row);

        let mut nrows = 0;
        for row in rows {
            nrows += 1;
            row.append_to(&mut buffer);
        }

        Matrix {
            bytes: buffer.unwrap(),
            ncols: ncols,
            nrows: nrows,
        }
    }

    pub fn bytes(&self) -> &[u8] {
        self.bytes.as_slice()
    }

    pub fn ncols(&self) -> uint {
        self.ncols
    }

    pub fn nrows(&self) -> uint {
        self.nrows
    }
}

trait Row {
    fn append_to(self, buffer: &mut MemWriter);
    fn ncols(Option<Self>) -> uint;
}

impl<A: Data, B: Data> Row for (A, B) {
    fn append_to(self, buffer: &mut MemWriter) {
        let (a, b) = self;

        buffer.write_le_f64(a.f64()).unwrap();
        buffer.write_le_f64(b.f64()).unwrap();
    }

    fn ncols(_: Option<(A, B)>) -> uint {
        2
    }
}

impl<A: Data, B: Data, C: Data> Row for (A, B, C) {
    fn append_to(self, buffer: &mut MemWriter) {
        let (a, b, c) = self;

        buffer.write_le_f64(a.f64()).unwrap();
        buffer.write_le_f64(b.f64()).unwrap();
        buffer.write_le_f64(c.f64()).unwrap();
    }

    fn ncols(_: Option<(A, B, C)>) -> uint {
        3
    }
}

impl<A: Data, B: Data, C: Data, D: Data> Row for (A, B, C, D) {
    fn append_to(self, buffer: &mut MemWriter) {
        let (a, b, c, d) = self;

        buffer.write_le_f64(a.f64()).unwrap();
        buffer.write_le_f64(b.f64()).unwrap();
        buffer.write_le_f64(c.f64()).unwrap();
        buffer.write_le_f64(d.f64()).unwrap();
    }

    fn ncols(_: Option<(A, B, C, D)>) -> uint {
        4
    }
}