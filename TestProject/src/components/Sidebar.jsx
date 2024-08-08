import React from "react";
import Button from "react-bootstrap/esm/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { GiPlainCircle } from "react-icons/gi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiMinus } from "react-icons/ti";
import { MdArrowBackIos } from "react-icons/md";
function Sidebar({
  show,
  handleClose,
  segmentName,
  setSegmentName,
  handleRemoveRow,
  schemaOptions,
  setSelectedSchema,
  rowCount,
  selectedSchema,
  handleSchemaChange,
  handleAddRow,
  handleAddSegement,
}) {
  const filterOptions = schemaOptions.filter(
    (data) =>
      data.value == "gender" ||
      data.value == "last_name" ||
      data.value == "first_name" ||
      data.value == ""
  );
  return (
    <div>
      <Offcanvas placement={"end"} show={show} onHide={handleClose}>
        <Offcanvas.Header className="navbgcolor">
          <Offcanvas.Title className="text-white">
            <div className="d-flex gap-2 align-items-center  ">
              <div>
                <MdArrowBackIos color="white" />
              </div>
              <div>
                <h4 className="m-0">Saving Segment</h4>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <Form>
              <div>
                <div className="">
                  <Form.Label htmlFor="segmentname" className="fw-bold">
                    Enter the Name of the Segment
                  </Form.Label>
                  <Form.Control
                    className="my-3"
                    type="text"
                    id="segmentname"
                    placeholder="Name of the segment"
                    value={segmentName}
                    onChange={(e) => setSegmentName(e.target.value)}
                  />
                </div>
                <div>
                  <p className="fw-bold">
                    To save your segment, you need to add the Schemas to build
                    the query
                  </p>
                </div>
                <div>
                  <div className="d-flex justify-content-end gap-2 p-3">
                    <div>
                      <GiPlainCircle color="green" /> -{" "}
                      <span className="fw-bold">User Traits</span>
                    </div>
                    <div>
                      <GiPlainCircle color="red" /> -{" "}
                      <span className="fw-bold">Group Traits</span>
                    </div>
                  </div>

                  <div className={rowCount.length > 0 ? "boxborder" : ""}>
                    {rowCount.map((data, index) => (
                      <Row key={index} className="align-items-center my-3">
                        <Col lg={1} md={1} sm={1} className="text-end pe-0">
                          <div>
                            <GiPlainCircle color="green" />
                          </div>
                        </Col>
                        <Col lg={9} md={9} sm={9}>
                          <Form.Select id={`dropdown-${index}`}>
                            {schemaOptions.map((option, optionIndex) => (
                              <option
                                key={optionIndex}
                                value={option.value}
                                selected={option.value === data}
                              >
                                {option.label}
                              </option>
                            ))}
                          </Form.Select>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <Button
                            className="bgcolor"
                            onClick={() => handleRemoveRow(index)}
                          >
                            <TiMinus color="#6c8098" size={25} />
                          </Button>
                        </Col>
                      </Row>
                    ))}
                  </div>

                  <Row className="align-items-center my-3">
                    <Col lg={1} md={1} sm={1} className="text-end pe-0">
                      <div>
                        <GiPlainCircle color="gray" />
                      </div>
                    </Col>
                    <Col lg={9} md={9} sm={9}>
                      <Form.Select
                        value={selectedSchema ? selectedSchema.value : ""}
                        onChange={handleSchemaChange}
                      >
                        {filterOptions.map((option, optionIndex) => (
                          <option key={optionIndex} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col lg={2} md={2} sm={2}>
                      <Button className="bgcolor ">
                        <TiMinus color="#6c8098" size={25} />
                      </Button>
                    </Col>
                  </Row>

                  <div>
                    <Button
                      variant="link"
                      className="text-success"
                      onClick={handleAddRow}
                    >
                      + Add new schema
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </Offcanvas.Body>
        <Row className="p-3">
          <Col>
            <div className="d-flex  gap-2 ">
              <div>
                <Button
                  variant="success"
                  className="text-white"
                  onClick={handleAddSegement}
                >
                  Save the Segment
                </Button>
              </div>
              <div>
                <Button
                  variant="light"
                  className="text-danger"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
