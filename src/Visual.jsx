import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3';

const Visual = (props) => {
    const svgRef = useRef();
    const [dataItem, setDataItem] = useState({});

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        setDataItem(props.Visualdata);
        var svgWidth = 500, svgHeight = 300, barPadding = 5;
        var barWidth = (svgWidth / dataItem.length);

        //         const xScale = d3.scaleLinear()
        //         .domain([0, 10])
        //         .range([0, width]);

        //       const yScale = d3.scaleLinear()
        //         .domain([0, 100])
        //         .range([height, 0]);

        // const xAxis = d3.axisBottom(xScale);
        // const yAxis = d3.axisLeft(yScale);


        var barChart = svg.selectAll('rect')
            .data(dataItem)
            .enter()
            .append("rect")
            .attr('fill', 'grey')
            .attr('y', function (d) {
                return svgHeight - d
            })
            .attr("height", function (d) {
                return d
            })
            .attr("width", barWidth - barPadding)
            .attr("transform", function (d, i) {
                var translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            });
    }, [])

    return (
        <div>

            <svg ref={svgRef} width={500} height={300}></svg>

        </div>
    )
}

export default Visual