#!/bin/sh

time tsc && npm run clean && 
time gulp && npm run clean && 
time grunt && npm run clean
time webpack && npm run clean
